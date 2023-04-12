import Article from './Article.js'

const FAKE_IT_TIL_YOU_MAKE_IT: string[] = [
    'projects/20230217-cartman.html',
    'projects/20220614-reddit.html',
    'projects/20220529-housing.html',
]

function Projects() {
    function renderPosts(urls: string[]): JSX.Element[] {
        return (
            urls.map((postURL) => <Article key={postURL} postURL={postURL} />)
        )
    }
    return (
        <>
            {renderPosts(FAKE_IT_TIL_YOU_MAKE_IT)}
        </>
    )
}

export default Projects
