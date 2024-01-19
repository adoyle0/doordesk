use http::status::StatusCode;
use leptos::*;
use thiserror::Error;

#[derive(Clone, Debug, Error)]
pub enum AppError {
    #[error("Not Found")]
    NotFound,
}

impl AppError {
    pub fn status_code(&self) -> StatusCode {
        match self {
            AppError::NotFound => StatusCode::NOT_FOUND,
        }
    }
}

#[component]
pub fn ErrorTemplate(
    #[prop(optional)] outside_errors: Option<Errors>,
    #[prop(optional)] errors: Option<RwSignal<Errors>>,
) -> impl IntoView {
    let errors = match outside_errors {
        Some(e) => create_rw_signal(e),
        None => match errors {
            Some(e) => e,
            None => panic!("No Errors found and we expected errors!"),
        },
    };
    // Get Errors from Signal
    let errors = errors.get_untracked();

    let errors: Box<_> = errors.into_iter().filter_map(|(_k, v)| v.into()).collect();
    println!("Errors: {errors:#?}");

    view! {
        <article class="p-7 my-5 mx-auto w-11/12 max-w-screen-xl bg-opacity-10 rounded-md bg-zinc-700 shadow-1g">
            <h1 class="text-3xl font-light text-orange-600 capitalize max-6-xs">
                {if errors.len() > 1 { "Errors!" } else { "Error!" }}
            </h1>
            <hr class="opacity-50"/>

            <ul>
                {move || {
                    errors
                        .into_iter()
                        .map(|e: &_| view! { <li>{e.to_string()}</li> })
                        .collect_view()
                }}

            </ul>

        </article>
    }
}
