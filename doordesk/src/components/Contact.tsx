import { Component } from 'react'

interface IContactProps {
}

interface IContactState {
}

class Contact extends Component<IContactProps, IContactState> {
    constructor(props: IContactProps) {
        super(props)
    }
    render() {
        return (
            <div className="content-container">
                <div className="content">
                    <p>contact me maybe</p>
                </div>
            </div>
        )
    }
}

export default Contact
