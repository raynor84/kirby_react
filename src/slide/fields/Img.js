
import React from 'react';


class Logo extends React.Component {
	componentDidMount() {

	}
	render() {
		if(this.props.imageField!=undefined) {
			console.log(this.props.imageField.url);
			return (
				<img class={this.props.addClass} src={this.props.imageField.url} width={this.props.imageWidth} height={this.props.imageHeight} alt={this.props.imageAlt} data-action={this.props.dataAction} />
			);
		}
		if(this.props.fields!== undefined && this.props.fields.image[0]!==undefined) {
		  return (
			<img class={this.props.addClass} width={this.props.fields.image_width} height={this.props.fields.image_height} src={this.props.fields.image[0].url} alt={this.props.fields.image__alternativtext} data-action={this.props.dataAction} />
		  );
		}
		return null;
	}
}

export default Logo;



