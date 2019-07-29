import * as React from 'react';

import PageInterface from './PageInterface';


class App extends React.Component<PageInterface, {}> {
    constructor(args) {
        super(args)
        document.title = "test ABC"
    }
    render() {
        return (<div>
            <h1>Welcome to React with Typescript, APP2,lala</h1>
            <p>The color of this page is: {this.props.color}</p>
        </div>
        );
    }
}

export default App;