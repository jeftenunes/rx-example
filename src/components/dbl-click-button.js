import { fromEvent } from 'rxjs';
import React, { Component } from 'react';
import { buffer, filter, throttleTime } from 'rxjs/operators';

class DblClickButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
            message: ''
        };
    }

    componentDidMount() {
        const div = document.querySelectorAll('.button'); 

        const clickStream = fromEvent(div, 'click');
        clickStream
            .pipe(
                buffer(clickStream.pipe(throttleTime(450))),
                filter(clickArray => clickArray.length > 1)
            )
            .subscribe(() => this.setState({ message: `The button was double clicked ${this.state.counter++} times` }));
    }

    render() {
        return(
            <div>
                <div className='button' style={{maxWidth: '150px', maxHeight:'50px',backgroundColor: 'gray'}}>
                    <span className='span'>Click me</span>
                </div>
                <span className='result'>{this.state.message}</span>
            </div>
        );
    }
}

export default DblClickButton;