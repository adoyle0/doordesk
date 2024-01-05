use crate::components::article::*;
use leptos::*;

#[component]
pub fn Blog(cx: Scope) -> impl IntoView {
    view! { cx,
        <Article />
        <p>blog</p>
    }
}
