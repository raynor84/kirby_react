import React from 'react';


class Text extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}><span class="opacity-8">{this.props.fields.text}</span></p>
        );
    }
}
export default Text;