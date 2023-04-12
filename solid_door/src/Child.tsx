import { createResource } from "solid-js";

const CONTENT = {
    Home: `Mix of other content sorted by date descending`,
    Blog: `Blog posts sorted by date descending`,
    Projects: `Project write-ups sorted by date descending`,
    Games: `Games page`,
    Cartman: `Cartman`,
};

function createDelay() {
    return new Promise((resolve) => {
        const delay = Math.random() * 420 + 69;
        setTimeout(() => resolve(delay), delay);
    });
};

const Child = (props) => {
    const [time] = createResource(createDelay);

    return (
        <div class="tab-content">
            Content for page "{props.page}" after {time()?.toFixed()}ms.
            <p>{CONTENT[props.page]}</p>
        </div>
    );
};

export default Child;
