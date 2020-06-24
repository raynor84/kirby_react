import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import VideoThumbnail from './fields/VideoThumbnail';
class Slide81 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
          <div class="ae-2 fromLeft"><Text fields={this.props.slide} addClass="large"/>
          </div>
          <div class="margin-top-4">
            <div class="videoThumbnail rounded shadow popupTrigger ae-6" data-popup-id="81">
            <VideoThumbnail fields={this.props.slide} addClass="wide" dataAction=""/></div>
          </div>
        </div>

      </div>
    </div>
  </Section>

  <div class="popup autoplay" data-popup-id="81">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap">
        <div class="fix-10-12">
          <div class="embedVideo popupContent shadow rounded">
            <iframe title="Video" data-src={this.props.slide.youtube_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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
export default Slide81;