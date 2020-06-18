import React from 'react';
import Section from './Section';
import Logo from './fields/Logo';
import PopupButton from './fields/PopupButton';
class Slide02 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-3-12">
          <Logo fields={this.props.slide}/>
        </div>
        <PopupButton fields={this.props.slide} popupid="2"/>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="2">
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
export default Slide02;