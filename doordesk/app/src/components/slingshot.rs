use leptos::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArticleData {
    pub content_type: String,
    pub title: String,
    pub date: String, // make datetime?
    pub content: String,
}

#[server]
pub async fn slingshot() -> Result<Vec<ArticleData>, ServerFnError> {
    let mut articles = vec![];
    let data_dir = "./pubic/static";

    for dir in std::fs::read_dir(data_dir)? {
        for file in std::fs::read_dir(dir?.path())? {
            let fileinfo = file?;
            let filepath = fileinfo.path();

            if let Some(filetype) = filepath.extension() {
                if filetype == "md" {
                    let file = std::fs::read_to_string(filepath)?;
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
    }

    // Simulate lag
    use std::thread::sleep;
    use std::time::Duration;
    sleep(Duration::from_millis(300));

    Ok(articles)
}
