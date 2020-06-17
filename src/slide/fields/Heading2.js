import React from 'react';


class Heading2 extends React.Component {

  
    render() {
        console.log(this.props.fields);
        return (
            <this.props.fields.ordnung2 
                class={this.props.addClass + " " +this.props.fields.size2 +" "+this.props.fields.modifizierer2 + " " + this.props.addClass}>
                    {this.props.fields.title2}
            </this.props.fields.ordnung2>
        );
    }
}
export default Heading2;