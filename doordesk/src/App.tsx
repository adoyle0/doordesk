import { Component }  from 'react'
import './App.css'
import Header from './components/Header.js'
import Blog from './components/Blog.js'

const BLOG_POSTS = [
    'blog/000000000-swim.html',
    'blog/20220506-change.html'
]

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Blog />
            </div>
        )
    }
}

export default App
