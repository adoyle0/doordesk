import { Component } from 'react'

interface IGamesProps {
}

interface IGamesState {
}

class Games extends Component<IGamesProps, IGamesState> {
    constructor(props: IGamesProps) {
        super(props)
    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <p>yo dawg I heard you like games</p>
                </div>
            </div>
        )
    }
}

export default Games
