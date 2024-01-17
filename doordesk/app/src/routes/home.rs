use crate::components::article::*;
use crate::components::slingshot::*;
use leptos::*;

#[component]
pub fn Home() -> impl IntoView {
    let data_resource = create_local_resource(|| (), |_| async move { slingshot().await });

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
        }>{articles_view}</Suspense>
    }
}
