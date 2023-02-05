import { Component } from 'react'

interface IHeaderProps {
    pages: string[];
    currentPage: string;
}

interface IHeaderState {
}

class Header extends Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props)
    }
    render() {
        return (
            <div className="header">
                <div className="content">
                    <header>
                        <h1>DoorDesk</h1>
                    </header>
                    <nav>
                        <p> {this.props.currentPage} </p>
                        <p> {this.props.pages} </p>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
