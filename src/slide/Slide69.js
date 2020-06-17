import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
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
          <ul class="flex fixedSpaces later flex-69 equal equalMobile popupTrigger controller" data-popup-id="69-69" data-slider-id="69-69">
            <li class="col-4-12 margin-bottom-phablet-2">
              <div class="box-69 cursorZoomIn rounded ae-3 equalElement selected" style="background-image:url(assets/img/gallery-69-1.jpg);">
                <div class="table cell-69 equalElement">
                  <div class="cell">
                    <h4 class="small margin-bottom-1">Shadow &amp; Color</h4>
                    <p class="smallest bold uppercase cropBottom opacity-8">Read More</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-4-12 margin-bottom-phablet-2">
              <div class="box-69 cursorZoomIn rounded ae-4 equalElement" style="background-image:url(assets/img/gallery-69-2.jpg);">
                <div class="table cell-69 equalElement">
                  <div class="cell">
                    <h4 class="small margin-bottom-1">5 Reasons to Purchase Desktop Computers</h4>
                    <p class="smallest bold uppercase cropBottom opacity-8">Read More</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="col-4-12 margin-bottom-phablet-2">
              <div class="box-69 cursorZoomIn rounded ae-5 equalElement" style="background-image:url(assets/img/gallery-69-3.jpg);">
                <div class="table cell-69 equalElement">
                  <div class="cell">
                    <h4 class="small margin-bottom-1">Capri Blue Winter Wonder&#xA0;Candle</h4>
                    <p class="smallest bold uppercase cropBottom opacity-8">Read More</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide69;