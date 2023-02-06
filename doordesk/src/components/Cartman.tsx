import { Component } from 'react'

interface ICartmanProps {
}

interface ICartmanState {
}

class Cartman extends Component<ICartmanProps, ICartmanState> {
    constructor(props: ICartmanProps) {
        super(props)
    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <p>cartman</p>
                </div>
            </div>
        )
    }
}

export default Cartman
