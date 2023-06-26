import os
import markdown
from datetime import date, datetime
from pydantic import BaseModel

class Article(BaseModel):
    content_type: str
    title: str
    date: date
    content: str

def walk_for_md(path: str):
    buf = []

    for root, _, files in os.walk(path):
        mdeez = [f"{root}/{filename}" for filename in files if filename[-2:] == "md"]

        if mdeez:
            buf.extend(mdeez)

    return buf

def get_articles_from_dir(root_path: str) -> list[Article]:
    md = markdown.Markdown(extensions=['meta'])
    articles: list[Article] = []

    for file_path in walk_for_md(root_path):
        with open(file_path) as file:
            html: str = md.convert(file.read());
            meta: dict = md.Meta;

            articles.append(
                    Article(
                        content_type=meta.get('content_type')[0],
                        title=meta.get('title')[0],
                        date=datetime.strptime( meta.get( 'date')[0], '%Y %m %d'),
                        content=html,
                        ));

    return articles;

DB = sorted(
        get_articles_from_dir('.'),
        key=lambda article: article.date,
        reverse=True
        );

for article in DB:
    print(
            article.date,
            article.content_type,
            article.title,
            )
