use leptos::*;
use crate::components::article::*;

#[component]
pub fn Projects(cx: Scope) -> impl IntoView {
    view! { cx,
        <Article />
        <p>projects</p>
    }
}
