import { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

type IGamesProps = {
}

type IGamesState = {
    html: string;
}

class Games extends Component<IGamesProps, IGamesState> {
    constructor(props: IGamesProps) {
        super(props)
        this.state = {
            'html': ''
        }
    }
    async componentDidMount() {
        return fetch('games/index.html')
            .then((res) => res.text())
            .then((text) => this.setState({ html: text }))
    }
    render() {
        return (
            <div className="content-container">
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    children={this.state.html} />
            </div>
        )
    }
}

export default Games
