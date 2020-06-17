import React from 'react';


class Subtitle extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}>{this.props.fields.subtitle}</p>
        );
    }
}
export default Subtitle;