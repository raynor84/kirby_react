import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
import { Link } from "react-router-dom";

class Slide68 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-10-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2 fix-8-12"/>

          
          <ul class="flex flex-68 tintLogos equal equalMobile">
          {this.props.slide.list.map(function(fields, index) { 
            
            if (index > 5) {
              index %= 6;
            }

            let ae = index +3;

                return (

            <li class="col-2-12 col-tablet-1-4 col-phablet-1-3 col-phone-1-2">
              <div class={"table wide equalElement ae-"+ae}>
                <div class="cell"><Link to={typeof fields.url[0] === "object" ? fields.url[0].link: undefined} nofollow={fields.follow} target={fields.target}><Img fields={fields} addClass="" dataAction=""/></Link>
                </div>
              </div>
            </li>
                );
          })}

          </ul>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide68;