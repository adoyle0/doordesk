use leptos::*;
use serde::{Serialize, Deserialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArticleData {
    pub content_type: String,
    pub title: String,
    pub date: String, // make datetime?
    pub content: String,
}

#[server(Slingshot)]
pub async fn slingshot() -> Result<ArticleData, ServerFnError> {
    let data = ArticleData {
        content_type: String::from("Blog"),
        title: String::from("Test article"),
        date: String::from("12/21/2022"),
        content: String::from("Testicles"),
    };

    Ok(data)
}
