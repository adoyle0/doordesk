from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date

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

def get_html(content):
    with open('./static/'+content) as file:
        return file.read();

fake_db = [

        Article(
            content_type='project',
            title='''Lightning''',
            date=date(2023, 4, 27),
            content=get_html('projects/20230427-lightning.html'),
        ),

        Article(
            content_type='project',
            title='''Cartman is public!''',
            date=date(2022, 10, 20),
            content=get_html('projects/20221020-cartman.html'),
        ),

        Article(
            content_type='game',
            title='''fps''',
            date=date(2022, 10, 9),
            content=get_html('games/fps.html'),
        ),

        Article(
            content_type='game',
            title='''balls''',
            date=date(2022, 9, 13),
            content=get_html('games/balls.html'),
        ),

        Article(
            content_type='game',
            title='''adam''',  # this stuff will change
            date=date(2022, 9, 11),
            content=get_html('games/adam.html'),
            ),

        Article(
            content_type='blog',
            title='''It's a post about nothing!''',
            date=date(2022, 7, 1),
            content=get_html('blog/20220701-progress.html'),
        ),

        Article(
            content_type='project',
            title='''What Goes Into a Successful Reddit Post?''',
            date=date(2022, 6, 16),
            content=get_html('projects/20220614-reddit.html'),
        ),

        Article(
            content_type='blog',
            title='''Back to School''',
            date=date(2022, 6, 2),
            content=get_html('blog/20220602-back.html'),
        ),

        Article(
            content_type='game',
            title='''snek''',
            date=date(2022, 5, 29),
            content=get_html('games/snek.html'),
            ),

        Article(
            content_type='project',
            title='''Predicting Housing Prices''',
            date=date(2022, 5, 29),
            content=get_html('projects/20220529-housing.html'),
            ),

        Article(
            content_type='blog',
            title='''It's about time, NVIDIA''',
            date=date(2022, 5, 20),
            content=get_html('blog/20220520-nvidia.html'),
        ),

        Article(
            content_type='blog',
            title='''Change''',
            date=date(2022, 5, 6),
            content=get_html('blog/20220506-change.html'),
        ),

        Article(
            content_type='blog',
            title='''Hume''',
            date=date(2022, 2, 7),
            content=get_html('blog/000000000-swim.html'),
        ),

    ];

@api.get('/home')
async def serve_home():

    return fake_db

@api.get('/blog')
async def serve_blog():

    return [entry for entry in fake_db if entry.content_type == 'blog']

@api.get('/projects')
async def serve_projects():

    return [entry for entry in fake_db if entry.content_type == 'project' or entry.content_type == 'game']

@api.get('/bots')
async def serve_bots():

    return [entry for entry in fake_db if entry.content_type == 'chatbot']
