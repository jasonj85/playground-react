import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  render() {
    return (
      <div>
        <h2>Hello from React</h2>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))