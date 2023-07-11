use leptos::{component, view, IntoView, Scope};

#[component]
pub fn Home(cx: Scope) -> impl IntoView {
    view! { cx,
        <Article />
    }
}
