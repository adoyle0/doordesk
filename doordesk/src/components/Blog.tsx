import { Component } from 'react'
import BlogPost from './BlogPost.js'

// should render one by one

// make api that has post id, title, date, etc with url to article; then
// distribute to blog posts

const FAKE_IT_TIL_YOU_MAKE_IT: string[] = [
    'blog/20220701-progress.html',
    'blog/20220602-back.html',
    'blog/20220520-nvidia.html',
    'blog/20220506-change.html',
    'blog/000000000-swim.html',
]

interface IBlogProps {
}

interface IBlogState {
}

class Blog extends Component<IBlogProps, IBlogState> {
    constructor(props: IBlogProps) {
        super(props)
    }
    renderPosts(urls: string[]): JSX.Element[] {
        return (
            urls.map((postURL) => <BlogPost key={postURL} postURL={postURL} />)
        )
    }
    render() {
        return (
            <>
                {this.renderPosts(FAKE_IT_TIL_YOU_MAKE_IT)}
            </>
        )
    }
}

export default Blog
