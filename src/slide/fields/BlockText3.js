import React from 'react';


class BlockText3 extends React.Component {

  
    render() {
        return (
            <p class={this.props.addClass}>{this.props.fields.text3}</p>
        );
    }
}
export default BlockText3;