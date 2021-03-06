import React from 'react';
import { Link } from "react-router-dom";

class buttonb extends React.Component {

    
    render() {
        let link = this.props.fields.buttonb_url[0] !== null && this.props.fields.buttonb_url[0] !== undefined && this.props.fields.buttonb_url[0].link;
        link = link ? link : "";
        let button_position = this.props.fields.buttonb_position;
        let left_text;
        let right_text;
        if(button_position === "left") {
            right_text = this.props.fields.buttonb_text;
        }
        else {
            left_text = this.props.fields.buttonb_text;
        }
        return (
            <Link class={"button rounded ae-5 fromCenter " + this.props.fields.buttonb_stil+" "+this.props.fields.buttonb_farbe+" "+this.props.addClass} to={link} nofollow={this.props.fields.buttonb_nofollow} target={this.props.fields.buttonb_fenster}>{left_text}{this.props.fields.buttonb_material_icon ? <span class="material-icons"> {this.props.fields.buttonb_material_icon } </span>: "" }{right_text} </Link>
        );
    }
}
export default buttonb;