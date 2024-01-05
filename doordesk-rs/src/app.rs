use crate::error_template::{AppError, ErrorTemplate};

use leptos::*;
use leptos_meta::*;
use leptos_router::*;
use crate::routes::{blog::*, home::*,projects::*};

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context(cx);

    view! {
        cx,
        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Stylesheet id="leptos" href="/pkg/doordesk.css"/>

        // sets the document title
        <Title text="doordesk"/>

        // content for this welcome page
        <Router fallback=|cx| {
            let mut outside_errors = Errors::default();
            outside_errors.insert_with_default_key(AppError::NotFound);
            view! { cx,
                <ErrorTemplate outside_errors/>
            }
            .into_view(cx)
        }>
            <nav class="bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-lg sticky top-0">
                <ul class="container flex items-center p-3">
                    <li class="mx-1.5 sm:mx-6">
                        "DoorDesk"
                    </li>
                    <li class="mx-1.5 sm:mx-6">
                        <A href="" exact=true>"Home"</A>
                    </li>
                    <li class="mx-1.5 sm:mx-6">
                        <A href="/blog">"Blog"</A>
                    </li>
                    <li class="mx-1.5 sm:mx-6">
                        <A href="/projects">"Projects"</A>
                    </li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" view=|cx| view! { cx, <Home /> }/>
                    <Route path="/blog" view=|cx| view! { cx, <Blog /> }/>
                    <Route path="/projects" view=|cx| view! { cx, <Projects /> }/>
                </Routes>
            </main>
            <p class="text-center hover:rotate-180 duration-200 w-8 m-auto">
                <a href="https://open.spotify.com/playlist/3JRNw9gpt1w5ptsw8uDeYc?si=8f7e4191113f41f9">":)"</a>
            </p>
            <br />
        </Router>
    }
}
