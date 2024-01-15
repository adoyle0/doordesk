use crate::components::article::*;
use crate::components::slingshot::*;
use leptos::*;

#[component]
pub fn Home() -> impl IntoView {
    let data_resource = create_local_resource(|| (), |_| async move { slingshot().await });

    view! {
        <Suspense fallback=move || {
            view! { <p>"Loading..."</p> }
        }>
            {move || match data_resource.get() {
                None => view! { <p>"Loading..."</p> }.into_view(),
                Some(data) => view! { <Article data=data.unwrap()/> }.into_view(),
            }}

        </Suspense>
    }
}
