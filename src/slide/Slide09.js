import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Logo from './fields/Logo';
import PopupButton from './fields/PopupButton';
class Slide09 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <div class="fix-3-12">
            <Logo fields={this.props.slide}/>
          </div>
          <PopupButton fields={this.props.slide} popupid="9"/>
          <Text fields={this.props.slide} addClass="large ae-3"/>
          <form class="slides-form" action="#">
            <input type="email" class="rounded input-9 ae-4 fromCenter" name="user-email" placeholder="Email"/>
            <input type="password" class="rounded input-9 ae-5 fromCenter" name="user-password" placeholder="Password"/>
            <input type="password" class="rounded input-9 ae-6 fromCenter" name="confirm-password" placeholder="Confirm the password"/>
            <button type="submit" class="button blue rounded button-9 ae-7 fromCenter" name="button">Get Started</button>
          </form>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="9">
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
export default Slide09;