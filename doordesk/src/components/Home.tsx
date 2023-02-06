import { Component } from 'react'

interface IHomeProps {
}

interface IHomeState {
}

class Home extends Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props)
    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <p>home is where your guns are</p>
                </div>
            </div>
        )
    }
}

export default Home
