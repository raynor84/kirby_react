import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide75 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-12-12 margin-top-4">
          <ul class="flex flex-75 fixedSpaces ae-3 popupTrigger noText" data-popup-id="75">
            <li class="col-3-12 ae-6 fadeIn">
              <Img imageField={this.props.slide.gallery[0]} addClass="wide rounded margin-bottom-2" datasliderid="75" dataslideraction="0" dataAction=""/>
              <Img imageField={this.props.slide.gallery[1]} addClass="wide rounded margin-bottom-2" datasliderid="75" dataslideraction="1"  dataAction=""/>
            </li>
            <li class="col-3-12 ae-3 fadeIn">
              <Img imageField={this.props.slide.gallery[2]} addClass="wide rounded margin-bottom-2"  datasliderid="75" dataslideraction="2"  dataAction=""/>
            </li>
            <li class="col-3-12 ae-2 fadeIn">
              <Img imageField={this.props.slide.gallery[3]} addClass="wide rounded margin-bottom-2"  datasliderid="75" dataslideraction="3"  dataAction=""/>
              <Img imageField={this.props.slide.gallery[4]} addClass="wide rounded margin-bottom-2"  datasliderid="75" dataslideraction="4" dataAction=""/>
            </li>
            <li class="col-3-12 ae-7 fadeIn">
              <Img imageField={this.props.slide.gallery[5]} addClass="wide rounded margin-bottom-2"  datasliderid="75" dataslideraction="5" dataAction=""/>
              <Img imageField={this.props.slide.gallery[6]} addClass="wide rounded margin-bottom-2"  datasliderid="75" dataslideraction="6" dataAction=""/>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup animated" data-popup-id="75">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap spaces">

        <ul class="slider animated ae-1 fromAbove inlineBlock clickable popupContent disableSelect animateOnEvent" data-slider-id="75" style={{"display": "inline-block"}}>
          <li class="">
            <Img imageField={this.props.slide.gallery[0]} addClass="rounded" alt="Image" />
          </li>
          <li class="">
            <Img imageField={this.props.slide.gallery[1]} addClass="rounded" alt="Image" />
          </li>
          <li class="hide">
            <Img imageField={this.props.slide.gallery[2]} addClass="rounded" alt="Image" />
          </li>
          <li class="selected ae-1 do">
            <Img imageField={this.props.slide.gallery[3]} addClass="rounded" alt="Image" />
          </li>
          <li class="">
            <Img imageField={this.props.slide.gallery[4]} addClass="rounded" alt="Image" />
          </li>
          <li class="">
            <Img imageField={this.props.slide.gallery[5]} addClass="rounded" alt="Image" />
          </li>
          <li class="">
            <Img imageField={this.props.slide.gallery[5]} addClass="rounded" alt="Image" />
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>
</React.Fragment>

		);
	}
}
export default Slide75;