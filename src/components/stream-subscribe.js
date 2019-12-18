import { of } from 'rxjs';
import { fromEvent } from 'rxjs';
import React, { Component } from 'react';
import { map } from 'rxjs/operators';

class StreamSubscribe extends Component {
    constructor(props){
        super(props);

        this.state = {
            a: null,
            b: null,
            message: ''
        };
    }

    componentDidMount() {
        const streamA = of(1, 2, 7);
        const streamB = streamA.pipe(map(a => 10 * a));

        streamB.subscribe(b => console.log(b));
    }

    render() {
        return(<div>{this.state.message}</div>)
    }
}

export default StreamSubscribe;