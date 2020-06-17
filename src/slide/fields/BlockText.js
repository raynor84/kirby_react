import React from 'react';


class BlockText extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}>{this.props.fields.text}</p>
        );
    }
}
export default BlockText;