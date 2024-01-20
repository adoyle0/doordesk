use crate::error_template::{AppError, ErrorTemplate};

use leptos::*;
use leptos_meta::*;
use leptos_router::*;

pub mod components;
pub mod error_template;
pub mod routes;

// use crate::routes::{blog::*, home::*, projects::*};
use crate::routes::home::Home;

#[component]
pub fn App() -> impl IntoView {
    provide_meta_context();

    view! {
        <Stylesheet id="leptos" href="/pkg/doordesk.css"/>
        <Title text="doordesk"/>
        <Router fallback=|| {
            let mut outside_errors = Errors::default();
            outside_errors.insert_with_default_key(AppError::NotFound);
            view! { <ErrorTemplate outside_errors/> }.into_view()
        }>
            // Some repetitive nav styling is defined in the main .css file
            <nav class="sticky top-0 z-50 bg-gradient-to-b shadow-lg from-zinc-800 to-zinc-900">
                <ul class="container flex items-center p-3">
                    // Logo
                    <p class="mx-1.5 sm:mx-6">"DoorDesk"</p>
                    <li>
                        <A href="" exact=true>
                            "Home"
                        </A>
                    </li>
                    <li>
                        <A href="/blog">"Blog"</A>
                    </li>
                    <li>
                        <A href="/projects">"Projects"</A>
                    </li>
                    <li>
                        <a href="https://git.doordesk.net">"Git"</a>
                    </li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="" view=Home/>
                // <Route path="blog" view=Blog/>
                // <Route path="projects" view=Projects/>
                </Routes>
            </main>
            <p class="m-auto w-8 text-center duration-200 hover:rotate-180">
                <a href="https://open.spotify.com/playlist/3JRNw9gpt1w5ptsw8uDeYc?si=8f7e4191113f41f9">
                    ":)"
                </a>
            </p>
            <br/>
        </Router>
    }
}
