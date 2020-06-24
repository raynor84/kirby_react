import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
class Slide69 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light margin-bottom-4 ae-2"/>
        </div>
        <div class="fix-12-12">  
          <ul class="flex fixedSpaces later flex-69 equal equalMobile popupTrigger controller" data-popup-id="69" data-slider-id="69">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index +3;
            console.log(fields.image[0].url);
            let image = typeof fields.image[0] === "object" ? fields.image[0].url : undefined;
            return (
            <li class="col-4-12 margin-bottom-phablet-2">
              <div class={"box-69 cursorZoomIn rounded equalElement selected ae-"+ae} style={{"backgroundImage":"url("+image+")"}}>
                <div class="table cell-69 equalElement">
                  <div class="cell">
                    <Heading fields={fields} addClass="margin-bottom-1" />
                    <BlockText fields={fields} addClass="smallest bold uppercase cropBottom opacity-8" />
                  </div>
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
  <div class="popup animated" data-popup-id="69">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="https://designmodo.com/slides/app/preview/slide/69/#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap spaces">
      
        <ul class="slider inlineBlock clickable popupContent ae-1 fromCenter disableSelect" data-slider-id="69" style={{"display": "inline-block"}}>
        {this.props.slide.list.map(function(fields, index) { 
          let image = typeof fields.image_full[0] === "object" ? fields.image_full[0].url : undefined;
          return (
            <li><img class="rounded" src={image} alt={fields.image_alternativtext} width={fields.image_width} height={fields.image_width}/></li>
          );
        })}
          {/*<li class="selected"><img class="rounded" src="assets/img/gallery-69-full-2.jpg" alt="Image" /></li>
          <li><img class="rounded" src="assets/img/gallery-69-full-3.jpg" alt="Image" /></li>*/}
        </ul>
        
      </div>
    </div>
  </div>
</div>
</React.Fragment>

		);
	}
}
export default Slide69;