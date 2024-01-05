use leptos::*;
use crate::components::article::*;

#[component]
pub fn Home(cx: Scope) -> impl IntoView {
    view! { cx,
        <Article />
        <p>home</p>
    }
}
