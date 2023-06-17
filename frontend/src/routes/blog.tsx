import { For, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import Slingshot from "~/components/Slingshot";

import type { JSXElement } from "solid-js";
import type { Ammo } from "~/components/Slingshot";


export function routeData() {
    const [ammoBox] = createResource(async () => {
        const response = await fetch("http://127.0.0.1:9696/dennis/blog");

        return await response.json() as Ammo[];
    });

    return { ammoBox };
};


export default function Blog() {
    const { ammoBox } = useRouteData<typeof routeData>();

    return (
        <ul>
            <For each={ammoBox()}>
                {(blogPosts) => <li><Slingshot ammo={blogPosts} /></li>}
            </For>
        </ul>
    ) as JSXElement;
};
