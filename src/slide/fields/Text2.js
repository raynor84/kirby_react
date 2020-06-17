import React from 'react';
var parse = require('html-react-parser');

class Text2 extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}>
                 {parse(this.props.fields.text2)}
            </p>
        );
    }
}
export default Text2;