import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide77 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2"/>
        </div>
        <div class="fix-12-12">
          <ul class="flex flex-77 fixedSpaces equal equalMobile align-left">
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1">
              <a href="#" class="box-77 ae-3">
                <div class="thumbnail-77">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="details-77 padding-2 equalElement">
                  <div class="table wide">
                    <div class="cell">
                      <h4 class="smaller margin-bottom-1">Baking Bread</h4>
                      <p class="small opacity-8 cropBottom">Without music, life would be a mistake.</p>
                      <div class="author-77 relative margin-top-2 padding-top-2 padding-left-4">
                        <Img fields={this.props.slide} addClass="avatar-77 round" dataAction=""/>
                        <p class="small cropBottom">Paul Rand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1">
              <a class="box-77 ae-4">
                <div class="thumbnail-77 video popupTrigger" data-popup-id="77-77">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="details-77 padding-2 equalElement">
                  <div class="table wide">
                    <div class="cell">
                      <h4 class="smaller margin-bottom-1">Sourdough 101</h4>
                      <p class="small opacity-8 cropBottom">One good thing about music, when it hits you.</p>
                      <div class="author-77 relative margin-top-2 padding-top-2 padding-left-4">
                        <Img fields={this.props.slide} addClass="avatar-77 round" dataAction=""/>
                        <p class="small cropBottom">Ian Reeves</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1">
              <a href="#" class="box-77 ae-5">
                <div class="thumbnail-77">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="details-77 padding-2 equalElement">
                  <div class="table wide">
                    <div class="cell">
                      <h4 class="smaller margin-bottom-1">The Journey of a Cook</h4>
                      <p class="small opacity-8 cropBottom">None but ourselves can free our minds.</p>
                      <div class="author-77 relative margin-top-2 padding-top-2 padding-left-4">
                        <Img fields={this.props.slide} addClass="avatar-77 round" dataAction=""/>
                        <p class="small cropBottom">Georgia Alvarado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="col-3-12 col-tablet-1-2 col-phablet-1-1">
              <a href="#" class="box-77 ae-6">
                <div class="thumbnail-77">
                  <Img fields={this.props.slide} addClass="wide" dataAction=""/>
                </div>
                <div class="details-77 padding-2 equalElement">
                  <div class="table wide">
                    <div class="cell">
                      <h4 class="smaller margin-bottom-1">CBD Cookie Recipe</h4>
                      <p class="small opacity-8 cropBottom">Some people have lives; some people have music.</p>
                      <div class="author-77 relative margin-top-2 padding-top-2 padding-left-4">
                        <Img fields={this.props.slide} addClass="avatar-77 round" dataAction=""/>
                        <p class="small cropBottom">Justin Ortiz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
export default Slide77;