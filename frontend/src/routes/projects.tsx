import { For, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import Slingshot from "~/components/Slingshot";

import type { JSXElement } from "solid-js";
import type { Ammo } from "~/components/Slingshot";

import { DENNIS } from "~/root";


export function routeData() {
    const [ammoBox] = createResource(async () => {
        const response = await fetch(`${DENNIS}/projects`);

        return await response.json() as Ammo[];
    });

    return { ammoBox };
};


export default function Projects() {
    const { ammoBox } = useRouteData<typeof routeData>();

    return (
        <main>
            <For each={ammoBox()}>
                {(projects) => <Slingshot ammo={projects} />}
            </For>
        </main>
    ) as JSXElement;
};
