from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel


class Article(BaseModel):
    content_type: str
    title: str
    date: str  # use datetime
    url: str


api = FastAPI()


api.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@api.get('/dennis/blog')
async def return_blog_posts():
    return [
        Article(
            content_type='article',
            title='''It's a post about nothing!''',
            date='Jul 01, 2022',
            url='blog/20220701-progress.html',
        ),
        Article(
            content_type='article',
            title='''Back to School''',
            date='Jun 02, 2022',
            url='blog/20220602-back.html',
        ),
        Article(
            content_type='article',
            title='''It's about time, NVIDIA''',
            date='May 20, 2022',
            url='blog/20220520-nvidia.html',
        ),
        Article(
            content_type='article',
            title='''Change''',
            date='May 06, 2022',
            url='blog/20220506-change.html',
        ),
        Article(
            content_type='article',
            title='''''',
            date='',
            url='blog/00000000-swim.html',
        ),
    ]


@api.get('/dennis/projects')
async def return_projects():
    return [
        Article(
            content_type='chatbot',
            title='''Cartman''',  # this stuff will change
            date='Feb 17, 2023',
            url='projects/20230217-cartman.html',
        ),
        Article(
            content_type='article',
            title='''What Goes Into a Successful Reddit Post?''',
            date='Jun 14, 2022',
            url='projects/20220614-reddit.html',
        ),
        Article(
            content_type='article',
            title='''Predicting Housing Prices''',
            date='May 29, 2022',
            url='projects/20220529-housing.html',
        ),
    ]
