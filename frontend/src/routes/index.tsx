import { For, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import Slingshot from "~/components/Slingshot";

import type { JSXElement } from "solid-js";
import type { Ammo } from "~/components/Slingshot";

import { DENNIS } from "~/root";


export function routeData() {
    const [ammoBox] = createResource(async () => {
        const response = await fetch(`${DENNIS}/home`);

        return await response.json() as Ammo[];
    });

    return { ammoBox };
};


export default function Home() {
    const { ammoBox } = useRouteData<typeof routeData>();

    return (
        <ul>
            <For each={ammoBox()}>
                {(content) => <li><Slingshot ammo={content} /></li>}
            </For>
        </ul>
    ) as JSXElement;
};
