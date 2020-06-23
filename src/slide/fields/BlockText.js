import React from 'react';
var parse = require('html-react-parser');

class BlockText extends React.Component {

  
    render() {
        if(this.props.field!==undefined) {
            return (
                <p class={this.props.addClass}>{parse(this.props.field)}</p>
            );  
        }

        return (
            <p class={this.props.addClass}>{this.props.fields.text}</p>
        );
    }
}
export default BlockText;