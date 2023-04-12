import { createSignal, Index, Suspense, Switch, Match, useTransition } from 'solid-js';
import Child from "./Child";

import './App.css'

function App() {
    const [posts, setPosts] = createSignal([
        { title: 'post1', date: 'date1', body: 'body1' },
        { title: 'post2', date: 'date2', body: 'body2' },
        { title: 'post3', date: 'date3', body: 'body3' },
    ]);

    const [tab, setTab] = createSignal(0);
    const [pending, start] = useTransition();
    const updateTab = (index) => () => start(() => setTab(index));

    return (
        <>
            DD - doordesk
            <ul class="inline">
                <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
                    Home
                </li>
                <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                    Blog
                </li>
                <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
                    Projects
                </li>
                <li classList={{ selected: tab() === 3 }} onClick={updateTab(3)}>
                    Games
                </li>
                <li classList={{ selected: tab() === 4 }} onClick={updateTab(4)}>
                    Cartman
                </li>
            </ul>
            <div class="tab" classList={{ pending: pending() }}>
                <Suspense fallback={<div class="loader">Loading...</div>}>
                    <Switch>
                        <Match when={tab() === 0}>
                            <Child page="Home" />
                        </Match>
                        <Match when={tab() === 1}>
                            <Child page="Blog" />
                        </Match>
                        <Match when={tab() === 2}>
                            <Child page="Projects" />
                        </Match>
                        <Match when={tab() === 3}>
                            <Child page="Games" />
                        </Match>
                        <Match when={tab() === 4}>
                            <Child page="Cartman" />
                        </Match>
                    </Switch>
                </Suspense>
            </div >
            do routing
        </>
    );
};

export default App
