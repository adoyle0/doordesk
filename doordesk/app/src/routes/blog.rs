use crate::components::article::*;
use leptos::*;

#[component]
pub fn Blog() -> impl IntoView {
    view! {
        <Article />
        <p>Blog</p>
    }
}
