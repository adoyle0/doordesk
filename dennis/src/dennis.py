import os
import markdown
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date, datetime

STATIC_PATH = "./static"

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=[],
)

class Article(BaseModel):
    content_type: str
    title: str
    date: date
    content: str


def get_articles_from_path(path: str) -> list[Article]:
    md = markdown.Markdown(extensions=["meta"]);
    articles: list[Article] = []

    for root, _, filenames in os.walk(path):
        for filename in filenames:
            if filename[-2:] == "md":
                with open(f"{root}/{filename}") as file:
                    html: str = md.convert(file.read());
                    meta: dict = md.Meta;
    
                    articles.append(
                            Article(
                                content_type=meta.get("content_type")[0],
                                title=meta.get("title")[0],
                                date=datetime.strptime(meta.get("date")[0], "%Y %m %d"),
                                content=html,
                                ));
    return articles;

DB = sorted(
        get_articles_from_path(STATIC_PATH),
        key=lambda article: article.date,
        reverse=True
        );

@api.get('/home')
async def serve_home():

    return DB

@api.get('/blog')
async def serve_blog():

    return [entry for entry in DB if entry.content_type == 'blog']

@api.get('/projects')
async def serve_projects():

    return [entry for entry in DB if entry.content_type == 'project' or entry.content_type == 'game']

@api.get('/bots')
async def serve_bots():

    return [entry for entry in DB if entry.content_type == 'chatbot']
