import React from 'react';


class BlockText2 extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}>{this.props.fields.text2}</p>
        );
    }
}
export default BlockText2;