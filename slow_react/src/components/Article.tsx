import { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

type ArticleProps = {
    postURL: string;
}
type ArticleState = {
    postHTML: string;
}
class Article extends Component<ArticleProps, ArticleState> {
    constructor(props: ArticleProps) {
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
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    children={this.state.postHTML} />
            </div>
        )
    }
}

export default Article
