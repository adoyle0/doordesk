use crate::components::article::*;
use crate::components::slingshot::*;
use crate::error_template::*;
use leptos::*;

#[component]
pub fn Home() -> impl IntoView {
    let data_resource = create_local_resource(
        || (),
        |_| async move { slingshot("./public/static".to_string()).await },
    );

    let articles_view = move || {
        data_resource.and_then(|data| {
            data.iter()
                .map(|article| view! { <Article data=article.to_owned()/> })
                .collect_view()
        })
    };

    view! {
        <Suspense fallback=move || {
            view! { <p>"Loading..."</p> }
        }>
            <ErrorBoundary fallback=|errors| {
                view! { <ErrorTemplate errors=errors/> }
            }>{articles_view}</ErrorBoundary>
        </Suspense>
    }
}
