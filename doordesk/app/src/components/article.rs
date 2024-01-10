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
            <article class="p-7 my-5 mx-auto w-11/12 max-w-screen-xl bg-opacity-10 rounded-md bg-zinc-700 shadow-1g">
                <h1 class="text-3xl font-light text-orange-600 capitalize max-6-xs">
                    {move || match data.get() {
                        None => "Loading...".to_string(),
                        Some(data) => data.unwrap().title,
                    }}

                </h1>
                <hr class="opacity-50"/>
                <span class="pt-0 pb-3.5 text-xs opacity-50 m-t">
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
