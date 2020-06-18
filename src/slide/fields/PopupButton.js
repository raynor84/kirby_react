import React from 'react';


class Logo extends React.Component {
	componentDidMount() {

	}
	render() {
        let button_position = this.props.fields.buttonpopup_position;
        let left_text;
        let right_text;
        if(button_position === "left") {
            right_text = this.props.fields.buttonpopup_text;
        }
        else {
            left_text = this.props.fields.buttonpopup_text;
        }
        return (
            (this.props.fields.buttonpopup_text || this.props.fields.buttonpopup_material_icon) && <div class={"popupTrigger button rounded ae-5 fromCenter " + this.props.fields.buttonpopup_stil+" "+this.props.fields.buttonpopup_farbe+" "+this.props.fields.buttonpopup_groesse+" "+this.props.addClass} data-popup-id={this.props.popupid}>{left_text} <span class="material-icons"> {this.props.fields.buttonpopup_material_icon } </span>{right_text} </div>
        );
	}
}

export default Logo;


