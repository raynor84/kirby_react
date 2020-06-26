import React from 'react';


class Logo extends React.Component {
	componentDidMount() {

	}
	render() {
		
	  return (
		<div class="wide ae-1 fromCenter">
		{this.props.fields.logo[0] !== undefined && this.props.fields.logo[0]!== "" && <img src={this.props.fields.logo[0].url} width={this.props.fields.logo_width} height={this.props.fields.logo_height} alt={this.props.fields.alternativtext} />}
		</div>
	  );
	}
}

export default Logo;


