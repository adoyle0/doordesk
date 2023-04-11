import { Component } from 'react'

type CartmanProps = {
}

type CartmanState = {
    bot_name: string
    message: string
    max_new_tokens: number
    num_beams: number
    num_beam_groups: number
    no_repeat_ngram_size: number
    length_penalty: number
    diversity_penalty: number
    repetition_penalty: number
    early_stopping: boolean
    chat_history: string
}

class Cartman extends Component<CartmanProps, CartmanState> {
    constructor(props: CartmanProps) {
        super(props)
        this.state = {
            bot_name: 'cartman',
            message: 'Enter text here',
            max_new_tokens: 200,
            num_beams: 8, // must be divisible by num_beam_groups
            num_beam_groups: 4,
            no_repeat_ngram_size: 3,
            length_penalty: 1.4,
            diversity_penalty: 0,
            repetition_penalty: 2.1,
            early_stopping: true,
            chat_history: 'responses',
        }
    }

    onSubmit(message, history) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }

        history.value = history.value + 'You: ' + message.value + '\n';
        message.value = "";
        history.scrollTop = history.scrollHeight

        let fetchRes = fetch('http://localhost:6969/chat', options);
        fetchRes.then(res =>
            res.json()).then(d => {
                history.value = `${history.value}${d.name}: ${d.message}\n`;
                history.scrollTop = history.scrollHeight
            })
    }

    render() {
        return (
            <div className="content-container">
                <h2 className="title">Cartman</h2>
                <form id="chatbox">
                    <textarea
                        id="history"
                        defaultValue={this.state.chat_history}
                        readOnly={true}
                        wrap="soft"
                    />
                    <input
                        type="text"
                        id="message"
                        autoComplete="off"
                        defaultValue={this.state.message}
                    />
                    <input type="submit" defaultValue="Send" />
                    <br />
                    <h3>Knobs to spin:</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="max_new_tokens">Max new tokens:</label>
                                </td>
                                <td>
                                    <input
                                        id="max_new_tokens"
                                        type="number"
                                        defaultValue={this.state.max_new_tokens}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="num_beams">Num beams:</label>
                                </td>
                                <td>
                                    <input
                                        id="num_beams"
                                        type="number"
                                        defaultValue={this.state.num_beams}
                                    /> (must be divisible by num_beam_groups)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="num_beam_groups">Num beam groups:</label>
                                </td>
                                <td>
                                    <input
                                        id="num_beam_groups"
                                        type="number"
                                        defaultValue={this.state.num_beam_groups}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="no_repeat_ngram_size">No repeat ngram size:</label>
                                </td>
                                <td>
                                    <input
                                        id="no_repeat_ngram_size"
                                        type="number"
                                        defaultValue={this.state.no_repeat_ngram_size}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="length_penalty">Length penalty:</label>
                                </td>
                                <td>
                                    <input
                                        id="length_penalty"
                                        type="number"
                                        step="0.1"
                                        defaultValue={this.state.length_penalty}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="diversity_penalty">Diversity penalty:</label>
                                </td>
                                <td>
                                    <input id="diversity_penalty"
                                        type="number"
                                        step="0.1"
                                        defaultValue={this.state.diversity_penalty}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="repetition_penalty">Repetition penalty</label>
                                </td>
                                <td>
                                    <input
                                        id="repetition_penalty"
                                        type="number"
                                        step="0.1"
                                        defaultValue={this.state.repetition_penalty}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="reset" />
                </form>
            </div>
        )
    }
}

export default Cartman
