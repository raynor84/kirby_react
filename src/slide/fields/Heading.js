import React from 'react';
var parse = require('html-react-parser');

class Heading extends React.Component {

  
    render() {
            return (
                <this.props.fields.ordnung 
                    class={this.props.addClass + " " + this.props.fields.size +" "+this.props.fields.modifizierer + " " + this.props.addClass}>
                        {parse(this.props.fields.title)}
                </this.props.fields.ordnung>
            );
    }
}
export default Heading;