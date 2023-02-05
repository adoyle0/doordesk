import { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface IBlogPostProps {
    postURL: string;
}

interface IBlogPostState {
    postHTML: string;
}

class BlogPost extends Component<IBlogPostProps, IBlogPostState> {
    constructor(props: IBlogPostProps) {
        super(props)
        this.state = {
            'postHTML': ''
        }
    }
    async getPost(post: string) {
        return fetch(post)
            .then((res) => res.text())
    }
    componentDidMount() {
        this.getPost(this.props.postURL)
            .then((text) => this.setState({ postHTML: text }))

    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        children={this.state.postHTML} />
                </div>
            </div>
        )
    }
}

export default BlogPost
