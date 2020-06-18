import React from 'react';
var parse = require('html-react-parser');

class Heading extends React.Component {

  
    render() {
        
            return (
                <this.props.fields.ordnung 
                    class={this.props.addClass + " ae-1 " + this.props.fields.size +" "+this.props.fields.modifizierer + " " + this.props.addClass}>
                        {parse(this.props.fields.title)}
                </this.props.fields.ordnung>
            );
        return null;

    }
}
export default Heading;