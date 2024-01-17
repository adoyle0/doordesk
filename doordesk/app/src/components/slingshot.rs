use std::{any::Any, fs};

use leptos::*;
use serde::{Deserialize, Serialize};

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

#[server]
pub async fn slingshot() -> Result<Vec<ArticleData>, ServerFnError> {
    use std::fs::*;
    use std::io::prelude::*;

    let mut articles = vec![];
    let data_dir = "./public/static";

    for dir in fs::read_dir(data_dir).unwrap() {
        for file in fs::read_dir(dir.unwrap().path()).unwrap() {
            let fileinfo = file.unwrap();
            let filepath = fileinfo.path();
            let filetype = filepath.extension();

            if filetype.unwrap().to_str() == Some("md") {
                let file = read_to_string(filepath).unwrap();
                let md1: String = markdown::to_html(&file);

                articles.push(ArticleData {
                    content_type: String::from("Blog"),
                    title: String::from("Test article"),
                    date: String::from("12/21/2022"),
                    content: md1,
                })
            }
        }
    }

    // Simulate lag
    use std::thread::sleep;
    use std::time::Duration;
    sleep(Duration::from_secs(1));

    Ok(articles)
}
