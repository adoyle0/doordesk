// @refresh reload
import { Suspense } from "solid-js";
import {
    useLocation,
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";

import "./root.css";


export default function Root() {
    const location = useLocation();
    const active = (path: string) =>
        path == location.pathname
            ? "border-orange-700"
            : "border-transparent hover:border-orange-700 duration-300";

    return (
        <Html lang="en" class="text-zinc-300">
            <Head>
                <Title>doordesk</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body class="bg-zinc-950">
                <Suspense>
                    <ErrorBoundary>
                        <nav class="bg-gradient-to-b from-zinc-800 to-zinc-900">
                            <ul class="container flex items-center p-3">
                                <li class={`border-b-2} mx-1.5 sm:mx-6`}>
                                    DoorDesk
                                </li>
                                <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                                    <A href="/">Home</A>
                                </li>
                                <li class={`border-b-2 ${active("/blog")} mx-1.5 sm:mx-6`}>
                                    <A href="/blog">Blog</A>
                                </li>
                                <li class={`border-b-2 ${active("/projects")} mx-1.5 sm:mx-6`}>
                                    <A href="/projects">Projects</A>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
};
