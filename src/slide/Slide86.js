import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import BlockText from './fields/BlockText';

class Slide86 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <div class="fix-6-12 toLeft">
            <Heading fields={this.props.slide} addClass="margin-bottom-5 ae-1 fromLeft"/>
            <div class="popupTrigger ae-3 fromRight relative margin-top-4" data-popup-id="86">
                <span class="button play white button-86 absolute">
                <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#play"></use></svg>
                </span>
                <div class="text-86"><BlockText field={this.props.slide.video_text} addClass="smaller bold uppercase cropBottom"/><BlockText field={this.props.slide.video_text2} addClass="cropBottom small opacity-8" /></div>
              </div>
          </div>
        </div>

      </div>
    </div>
  </Section>

  <div class="popup autoplay" data-popup-id="86">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap">
        <div class="fix-10-12">
          <div class="embedVideo popupContent shadow rounded">
            <iframe title={this.props.slide._key} data-src={this.props.slide.youtube_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
export default Slide86;