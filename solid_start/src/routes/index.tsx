import { For, Accessor, createResource } from "solid-js"
import { useRouteData } from "solid-start";
import Post from "~/components/Post"


export type Article = {
    content_type: string;
    title: string;
    date: string;
    url: string;
};


export function routeData() {
    const [blogPosts] = createResource(async () => {
        const response = await fetch("http://127.0.0.1:9696/dennis/blog")
        return await response.json() as Article[];
    });

    return { blogPosts };
};


export default function Home() {
    const { blogPosts } = useRouteData<typeof routeData>();

    return (
        <>
            <ul>
                <For each={blogPosts()}>
                    {(post) => <li><Post article={post} /></li>}
                </For>
            </ul>
        </>
    )
};
