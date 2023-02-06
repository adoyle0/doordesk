import { Component } from 'react'

interface IProjectsProps {
}

interface IProjectsState {
}

class Projects extends Component<IProjectsProps, IProjectsState> {
    constructor(props: IProjectsProps) {
        super(props)
    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <p>project deez</p>
                </div>
            </div>
        )
    }
}

export default Projects
