import { For, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import Slingshot from "~/components/Slingshot";

import type { JSXElement } from "solid-js";
import type { Ammo } from "~/components/Slingshot";

import { DENNIS } from "~/root";

export function routeData() {
    const [ammoBox] = createResource(async () => {
        const response = await fetch(`${DENNIS}/blog`);

        return await response.json() as Ammo[];
    });

    return { ammoBox };
};


export default function Blog() {
    const { ammoBox } = useRouteData<typeof routeData>();

    return (
        <main>
            <For each={ammoBox()}>
                {(blogPosts) => <Slingshot ammo={blogPosts} />}
            </For>
        </main>
    ) as JSXElement;
};
