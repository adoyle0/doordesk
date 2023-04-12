import { Component } from 'react'
import { VariableSizeList as List } from 'react-window'
import Slingshot from './Slingshot.js'


class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
        }
    }
    async fetchBlogPosts() {
        return fetch('http://127.0.0.1:9696/dennis/blog')
            .then((res) => res.json());
    }
    componentDidMount() {
        this.fetchBlogPosts()
            .then((articles) => this.setState({ articles }))
    }
    render() {
        return (
            <>
                {console.log(this.state.articles.map(asd => asd.url), "bet you can't guess how many times I run O.o")}
            </>
        )
    }
}

export default Blog
