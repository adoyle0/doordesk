use leptos::*;
use serde::{Deserialize, Serialize};

use std::thread::sleep;
use std::time::Duration;

pub fn fetch(path: &str) -> String {
    format!("https://dennis.doordesk.net/{path}")
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArticleData {
    pub content_type: String,
    pub title: String,
    pub date: String, // make datetime?
    pub content: String,
}

#[server(Slingshot)]
pub async fn slingshot() -> Result<Vec<ArticleData>, ServerFnError> {
    let data_vec = vec![
        ArticleData {
            content_type: String::from("Blog"),
            title: String::from("Test article"),
            date: String::from("12/21/2022"),
            content: String::from("Testicles"),
        },
        ArticleData {
            content_type: String::from("Blog"),
            title: String::from("Test article 2"),
            date: String::from("12/22/2022"),
            content: String::from("Testicless"),
        },
    ];

    sleep(Duration::from_secs(1));
    Ok(data_vec)
}
