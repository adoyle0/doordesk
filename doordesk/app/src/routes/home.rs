use crate::components::article::*;
use leptos::*;

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <Article />
        <p>Home</p>
    }
}
