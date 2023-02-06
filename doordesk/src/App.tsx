import { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Blog from './components/Blog.js'
import Projects from './components/Projects.js'
import Games from './components/Games.js'
import Cartman from './components/Cartman.js'

const FAKE_IT_TIL_YOU_MAKE_IT: string[] = [
    // component carousel
    'Home',     // table of top 5 from(when enough content) *; then interleave latest from *
    'Blog',     // blog posts
    'Projects', // project writeups
    'Games',    // cards with thumbnail and summary
    'Cartman',  // with knobs!
]

interface IAppProps {
}

interface IAppState {
    currentPage: string;
    currentPageIndex: number;
}

class App extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {
            currentPage: 'Home',
            currentPageIndex: 0
        }
    }
    handleClick(message: string) {
        this.setState({currentPage: message})
    }
    ratchet() {
        console.log(this.state.currentPageIndex)

        if (this.state.currentPageIndex >= FAKE_IT_TIL_YOU_MAKE_IT.length - 1) {
            this.setState({
                currentPageIndex: 0,
                currentPage: FAKE_IT_TIL_YOU_MAKE_IT[0]
            })
        }
        else {
            this.setState({
                currentPageIndex: this.state.currentPageIndex + 1,
                currentPage: FAKE_IT_TIL_YOU_MAKE_IT[this.state.currentPageIndex+1]
            })

        }
    }
    render() {
        // could probably be dynamic
        let page: JSX.Element;
        switch (this.state.currentPage) {
            case 'Blog':
                page = <Blog />
                break;
            case 'Projects':
                page = <Projects />
                break;
            case 'Games':
                page = <Games />
                break;
            case 'Cartman':
                page = <Cartman />
                break;
            default:
                page = <Home />
                break;
        }
        return (
            <div className="App" onClick={() => this.ratchet()}>
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
