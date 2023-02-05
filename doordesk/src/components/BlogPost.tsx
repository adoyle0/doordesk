import { Component }  from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'post': ''
        }
    }
    async getPost(post) {
        return fetch(post)
            .then((res) => res.text())
    }
    componentDidMount(props) {
        this.getPost(this.props.post)
            .then((text) => this.setState({ post: text }))

    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.post} />
                </div>
            </div>
        )
    }
}

export default BlogPost
