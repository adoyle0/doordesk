use leptos::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArticleData {
    pub content_type: String,
    pub title: String,
    pub date: String, // make datetime?
    pub content: String,
}

#[component]
pub fn Article(data: ArticleData) -> impl IntoView {
    view! {
        // Shadow styling is in main .css file
        <article class="p-7 my-5 mx-auto w-11/12 max-w-screen-xl bg-opacity-10 rounded-md bg-zinc-700">
            <h1 class="text-3xl font-light text-orange-600 capitalize max-6-xs">{&data.title}</h1>
            <hr class="opacity-50"/>
            <span class="pt-0 pb-3.5 text-xs opacity-50 m-t">{&data.date}</span>
            <div inner_html=&data.content></div>
        </article>
    }
}
