import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin';
import '../tails.jpeg'

export default class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            {side: 'tails', imgSrc: "../tails.jpeg" }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // flipCoin() {
    //     const newCoin = choice(this.props.coins);
    //     this.setState(st => {
    //         let newState = {
    //             ...st,
    //             currCoin: newCoin,
    //             nFlips: this.state.nFlips + 1
    //         }
    //         if(newCoin.side === 'heads'){
    //             newState.nHeads += 1;
    //         } else{
    //             newState.nTails += 1;
    //         }
    //         return newState
    //     });
    // }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: this.state.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    }
    handleClick(e){
        this.flipCoin();
    }
    render() {
        return (
            <div className='CoinContainer'>
                <h2>Let's Flip A Coin!</h2>
                <button onClick={this.handleClick}>Flip Me!</button>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <p>
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
                </p>
            </div>
        )
    }
}
