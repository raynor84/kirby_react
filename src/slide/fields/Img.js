
import React from 'react';


class Logo extends React.Component {
	componentDidMount() {

	}
	render() {
		console.log(this.props.imageField);
		if(this.props.fields!== undefined && this.props.fields.image[0]!==undefined) {
		  return (
			<img class={this.props.addClass} width={this.props.fields.image_width} src={this.props.fields.image[0].url} alt={this.props.fields.image__alternativtext} data-action={this.props.dataAction} />
		  );
		}
		if(this.props.imageField) {
			return (
				<img class={this.props.addClass} src={this.props.imageField.url} alt="" data-action={this.props.dataAction} />
			);
		}
		return null;
	}
}

export default Logo;



