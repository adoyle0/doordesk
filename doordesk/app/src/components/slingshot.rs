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

#[server(Slingshot)]
pub async fn slingshot() -> Result<Vec<ArticleData>, ServerFnError> {
    let md1: String = markdown::to_html("[test](https://lickmysa.cc)");
    let md2: String = markdown::to_html("[test2](https://lickmysa.cc)");


    let data_vec = vec![
        ArticleData {
            content_type: String::from("Blog"),
            title: String::from("Test article"),
            date: String::from("12/21/2022"),
            content: md1,
        },
        ArticleData {
            content_type: String::from("Blog"),
            title: String::from("Test article 2"),
            date: String::from("12/22/2022"),
            content: md2,
        },
    ];

    // Simulate lag
    use std::thread::sleep;
    use std::time::Duration;
    sleep(Duration::from_secs(1));

    Ok(data_vec)
}
