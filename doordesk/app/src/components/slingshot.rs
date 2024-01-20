use crate::components::article::ArticleData;
use leptos::*;
use serde::Deserialize;

#[derive(Deserialize)]
struct ArticleFrontmatter {
    content_type: String,
    title: String,
    date: String,
}

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
                    let html_from_md =
                        femark::process_markdown_to_html_with_frontmatter(&file.to_string(), true)
                            .expect("Problem processing markdown");
                    let content = html_from_md.content;
                    let _toc = html_from_md.toc;

                    if let Some(front_raw) = html_from_md.frontmatter {
                        if let Some(front_code) = front_raw.code_block {
                            let toml: ArticleFrontmatter =
                                toml::from_str(&front_code.source)?;

                            articles.push(ArticleData {
                                content_type: toml.content_type,
                                title: toml.title,
                                date: toml.date,
                                content,
                            })
                        }
                    }
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
