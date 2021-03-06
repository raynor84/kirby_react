import React from 'react';
import Section from './Section';
import Logo from './fields/Logo';
import VideoThumbnail from './fields/VideoThumbnail';
class Slide04 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-5-12">
          <div class="fix-3-12 margin-bottom-5">
            <Logo fields={this.props.slide}/>
          </div>
          <VideoThumbnail fields={this.props.slide} popupid="4"/>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="4">
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
export default Slide04;