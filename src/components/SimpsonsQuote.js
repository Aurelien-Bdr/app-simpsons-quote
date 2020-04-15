import React from 'react';
import axios from 'axios';
import './SimpsonsQuote.css';


class SimpsonsQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpson: []
        };
        this.getSimpsonsQuote = this.getSimpsonsQuote.bind(this)
    }

    getSimpsonsQuote() {
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            .then(res => this.setState({ simpson: res.data[0] }))
    }

    componentDidMount() {
        this.getSimpsonsQuote();
    }

    render() {
        return (
            <div className="Quote">
                <h2>{this.state.simpson.character}</h2>
                <img src={this.state.simpson.image} alt={this.state.simpson.character}></img>
                <p>{this.state.simpson.quote}</p>
                <button type="button" onClick={this.getSimpsonsQuote}>reload for another quote</button>
            </div>
        )
    }

}


export default SimpsonsQuote;