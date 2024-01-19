use crate::components::article::ArticleData;
use leptos::*;

#[server]
pub async fn slingshot(path: String) -> Result<Vec<ArticleData>, ServerFnError> {
    let mut articles = vec![];

    for dir in std::fs::read_dir(path)? {
        for file in std::fs::read_dir(dir?.path())? {
            let fileinfo = file?;
            let filepath = fileinfo.path();

            if let Some(filetype) = filepath.extension() {
                if filetype == "md" {
                    let file = std::fs::read_to_string(filepath)?;
                    let html_from_md = femark::process_markdown_to_html(&file.to_string())
                        .expect("Problem processing markdown");
                    let content = html_from_md.content;
                    let _toc = html_from_md.toc;
                    let _frontmatter = html_from_md.frontmatter;

                    articles.push(ArticleData {
                        content_type: String::from("Blog"),
                        title: String::from("Test article"),
                        date: String::from("12/21/2022"),
                        content,
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
