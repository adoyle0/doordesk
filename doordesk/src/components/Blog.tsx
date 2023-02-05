import { Component }  from 'react'
import BlogPost from './BlogPost.js'

interface IBlogProps {
}

interface IBlogState {
}

class Blog extends Component<IBlogProps, IBlogState> {
    constructor(props: IBlogProps) {
        super(props)
    }
    render() {
        return (
            <>
                <BlogPost postURL='blog/20220506-change.html' />
                <BlogPost postURL='blog/000000000-swim.html' />
            </>
        )
    }
}

export default Blog
