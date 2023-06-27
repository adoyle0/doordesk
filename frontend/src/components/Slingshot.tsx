import type { JSXElement } from "solid-js";


export type Ammo = {
    content_type: string;
    title: string;
    date: string;
    url: string;
};


export default function Slingshot(props: { ammo: Ammo }) {

    return (
        <article class="bg-zinc-700 mx-auto p-7 my-5 w-11/12 max-w-screen-xl rounded-md shadow-lg bg-opacity-10">
            <h1 class="max-6-xs text-3xl text-orange-600 font-light capitalize">
                {props.ammo.title}
            </h1>
            <hr class="opacity-50" />
            <span class="opacity-50 text-xs pt-0 m-t pb-3.5">
                {props.ammo.date}
            </span>
            <div innerHTML={props.ammo.content} />
        </article>
    ) as JSXElement;
};
