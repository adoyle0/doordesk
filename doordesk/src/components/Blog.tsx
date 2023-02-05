import { Component }  from 'react'
import BlogPost from './BlogPost.tsx'

class Blog extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <BlogPost post='blog/20220506-change.html' />
                <BlogPost post='blog/000000000-swim.html' />
            </>
        )
    }
}

export default Blog
