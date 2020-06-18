import React from 'react';
var parse = require('html-react-parser');

class Text extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}><span class="opacity-8">{parse(this.props.fields.text)}</span></p>
        );
    }
}
export default Text;