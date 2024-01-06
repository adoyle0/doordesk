use crate::components::slingshot::*;
use leptos::*;

#[component]
pub fn Article() -> impl IntoView {
    let data = create_resource(
        || (),
        |_| async move {
            logging::log!("loading data from slingshot");
            slingshot().await
        },
    );

    view! {
        <Transition>
            <article class="bg-zinc-700 mx-auto p-7 my-5 w-11/12 max-w-screen-xl rounded-md shadow-1g bg-opacity-10">
                <h1 class="max-6-xs text-3xl text-orange-600 font-light capitalize">
                    {move || match data.get() {
                        None => "Loading...".to_string(),
                        Some(data) => data.unwrap().title,
                    }}

                </h1>
                <hr class="opacity-50"/>
                <span class="opacity-50 text-xs pt-0 m-t pb-3.5">
                    {move || match data.get() {
                        None => "Loading...".to_string(),
                        Some(data) => data.unwrap().date,
                    }}

                </span>
                <div>
                    {move || match data.get() {
                        None => "Loading...".to_string(),
                        Some(data) => data.unwrap().content,
                    }}

                </div>
            </article>
        </Transition>
    }
}
