import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import Img from './fields/Img';
class Slide79 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass=""/>
          
          <div class="ae-3 author-79 left margin-top-4">
            <Img fields={this.props.slide} addClass="avatar-79 round" dataAction=""/>
            <h4 class="smaller margin-bottom-1">{this.props.slide.author}</h4>
            <Text field={this.props.slide.author_description} addClass="small opacity-8"/>
          </div> 
        </div>   
          
        <div class="fix-10-12">
          <ul class="flex flex-79 margin-top-6 later left">

          {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 3;
            return (
            <li class="col-6-12 ae-4">
              <i class="material-icons">{fields.material_icon}</i>
              <Heading fields={fields} addClass="margin-bottom-1" />
              <BlockText addClass="small opacity-8" fields={fields}/>
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
export default Slide79;