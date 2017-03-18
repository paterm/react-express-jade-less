import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './home/components/index.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="start">
                <p> Hello React!</p>
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));