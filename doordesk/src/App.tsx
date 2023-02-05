import { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import Blog from './components/Blog.js'

const FAKE_IT_TIL_YOU_MAKE_IT: string[] = [
    // component carousel
    'Home',     // table of top 5 from(when enough content) *; then interleave latest from *
    'Blog',     // blog posts
    'Projects', // project writeups
    'Games',    // cards with thumbnail and summary
    'Contact',  // email form?
]

interface IAppProps {
}

interface IAppState {
    currentPage: string;
}

class App extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {
            currentPage: 'Blog'
        }
    }
    render() {
        let page;
        if (this.state.currentPage === 'Blog') {
            page = <Blog />
        }
        return (
            <div className="App">
                <Header
                    pages={FAKE_IT_TIL_YOU_MAKE_IT}
                    currentPage={this.state.currentPage}
                />
                {page}
            </div>
        )
    }
}

export default App
