import React from 'react';


class ButtonA extends React.Component {

    
    render() {
        let link = this.props.fields.buttona_url[0] !== null && this.props.fields.buttona_url[0] !== undefined && this.props.fields.buttona_url[0].link;
        link = link ? link : "";
        let button_position = this.props.fields.buttona_position;
        let left_text;
        let right_text;
        if(button_position === "left") {
            right_text = this.props.fields.buttona_text;
        }
        else {
            left_text = this.props.fields.buttona_text;
        }
        return (
            (this.props.fields.buttona_text || this.props.fields.buttona_material_icon) && <a class={"button rounded margin-top-1 ae-5 fromCenter " + this.props.fields.buttona_stil+" "+this.props.fields.buttona_farbe+" "+this.props.fields.buttona_groesse} href={link} nofollow={this.props.fields.buttona_nachverfolgung} target={this.props.fields.buttona_fenster}>{left_text} <span class="material-icons"> {this.props.fields.buttona_material_icon } </span>{right_text} </a>
        );
    }
}
export default ButtonA;