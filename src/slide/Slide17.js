import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import VideoThumbnail from './fields/VideoThumbnail';
class Slide17 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex fixedSpaces">
            <li class="col-6-12">
              <VideoThumbnail fields={this.props.slide} popupid="17-6"/>
            </li>
            <li class="col-1-12"/>
            <li class="col-5-12 left">
              <Heading fields={this.props.slide} addClass="margin-top-1 margin-bottom-2 ae-2 fromRight"/>
              <Text fields={this.props.slide}/>
              <ButtonA fields={this.props.slide}/>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="17-6">
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
export default Slide17;