import type { JSXElement } from "solid-js";


export type Ammo = {
    content_type: string;
    title: string;
    date: string;
    url: string;
};


export default function Slingshot(props: { ammo: Ammo }) {

    return (
        <main class="bg-zinc-700 mx-auto p-6 my-5 w-11/12 max-w-screen-xl rounded-md shadow-lg bg-opacity-20">
            <p class="text-right">
                {props.ammo.date}
            </p>
            <h1 class="max-6-xs text-3xl text-red-600 font-light uppercase">
                {props.ammo.title}
            </h1>
            <p class="m-2">{props.ammo.content_type}</p>
            <div innerHTML={props.ammo.content} />
        </main>
    ) as JSXElement;
};
