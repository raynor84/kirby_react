
import React from 'react';


class Logo extends React.Component {
	componentDidMount() {

	}
	render() {
		if(this.props.fields.image[0]!=="undefined") {
		  return (
			<img class={this.props.addClass} width={this.props.fields.img_width} src={this.props.fields.image[0].url} alt={this.props.fields.img_alt} data-action={this.props.dataAction} />
		  );
		}
		return null;
	}
}

export default Logo;



