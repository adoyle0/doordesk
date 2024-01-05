use leptos::*;

#[component]
pub fn Article() -> impl IntoView {
    // Creates a reactive value to update the button
    let (count, set_count) = create_signal(0);
    let on_click = move |_| set_count.update(|count| *count += 1);

    view! {
        <article class="bg-zinc-700 mx-auto p-7 my-5 w-11/12 max-w-screen-xl rounded-md shadow-1g bg-opacity-10">
            <h1 class="max-6-xs text-3xl text-orange-600 font-light capitalize">"ayo"</h1>
            <hr class="opacity-50" />
            <span class="opacity-50 text-xs pt-0 m-t pb-3.5">"today"</span>
            <div>
                <button on:click=on_click>"Click Me: " {count}</button>
            </div>
        </article>
    }
}
