import { Component } from 'react'
import BlogPost from './BlogPost.js'

const BLOG_URLS: string[] = [
    'blog/20220506-change.html',
    'blog/000000000-swim.html'
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
                {this.renderPosts(BLOG_URLS)}
            </>
        )
    }
}

export default Blog
