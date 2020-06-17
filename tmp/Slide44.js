import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import PopupButton from './fields/PopupButton';
import ButtonA from './fields/ButtonA';
class Slide44 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap left">

        <div class="fix-5-12 toLeft">
          <div class="ae-1"><Text fields={this.props.slide} addClass="larger light margin-bottom-1 opacity-8"/></div>
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <p class="larger light ae-2 margin-bottom-4"><span class="opacity-8">Do not seek to change what has come before. Seek to create that which has&#xA0;not.</span></p>
          <ButtonA fields={this.props.slide}/> <PopupButton fields={this.props.slide} popupid="44-44"/>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="44-44">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"/></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap">
        <div class="fix-10-12">
          <div class="embedVideo popupContent shadow rounded">
            <iframe data-src={this.props.slide.youtube_url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={this.props.slide._key} frameBorder="0" allowFullScreen=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</React.Fragment>

		);
	}
}
export default Slide44;