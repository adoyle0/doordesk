import Article from './Article.js'

// should render one by one

// make api that has post id, title, date, etc with url to article; then
// distribute to blog posts

const FAKE_IT_TIL_YOU_MAKE_IT: string[] = [
    'projects/20230217-cartman.html',
    'blog/20220701-progress.html',
    'projects/20220614-reddit.html',
    'blog/20220602-back.html',
    'projects/20220529-housing.html',
    'blog/20220520-nvidia.html',
    'blog/20220506-change.html',
    'blog/000000000-swim.html',
]

function Home() {
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

export default Home
