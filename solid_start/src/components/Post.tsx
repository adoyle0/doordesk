import type { Article } from "~/routes";

export default function Post(props: Article) {
    console.log(props)
    return (
        <main class="bg-zinc-900 mx-auto text-zinc-300 p-4 my-5 max-w-prose">
            <p class="text-right">
                {props.article.date}
            </p>
            <h1 class="max-6-xs text-4xl text-red-600 font-thin uppercase">
                {props.article.title}
            </h1>
            <p class="my-4">
                {props.article.url}
            </p>
        </main>
    );
}
