import { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

type IBlogPostProps = {
    postURL: string;
}
type IBlogPostState = {
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
    async componentDidMount() {
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
