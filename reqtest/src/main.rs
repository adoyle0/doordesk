use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Article {
    content_type: String,
    title: String,
    date: String,
    content: String,
}

async fn get_articles() {
    let resp = reqwest::get("https://dennis.doordesk.net/home")
        .await?
        .json::<Vec<Article>>();
    return resp.await;
}

#[tokio::main]
async fn main() {
    for article in get_articles() {
        println!("{} {} {}", article.date, article.content_type, article.title);
    }

}
