import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import VideoThumbnail from './fields/VideoThumbnail';
class Slide18 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <div class="fix-5-12 toLeft">
            <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
            <Text fields={this.props.slide} addClass="ae-2 fromRight large"/>
            <VideoThumbnail fields={this.props.slide} popupid="18-18"/>
          </div>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="18-18">
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
export default Slide18;