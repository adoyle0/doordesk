import { Component } from 'react'
import BlogPost from './BlogPost.js'

// should render one by one

// make api that has post id, title, date, etc with url to article; then
// distribute to blog posts

const FAKE_IT_TIL_YOU_MAKE_IT: string[] = [
    'blog/20220614-reddit.html',
    'blog/20220529-housing.html',
]

interface IProjectsProps {
}

interface IProjectsState {
}

class Projects extends Component<IProjectsProps, IProjectsState> {
    constructor(props: IProjectsProps) {
        super(props)
    }
    renderPosts(urls: string[]): JSX.Element[] {
        return (
            urls.map((postURL) => <BlogPost key={postURL} postURL={postURL} />)
        )
    }
    render() {
        return (
            <>
                {this.renderPosts(FAKE_IT_TIL_YOU_MAKE_IT)}
            </>
        )
    }
}

export default Projects
