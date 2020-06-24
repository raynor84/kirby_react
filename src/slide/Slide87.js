import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import VideoVorschau from './fields/VideoThumbnail';
class Slide87 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
          <Text fields={this.props.slide} addClass="large margin-bottom-4 ae-2 fromLeft"/>
          <VideoVorschau fields={this.props.slide} addClass="videoThumbnail margin-bottom-4 noShadow noTint ae-3 popupTrigger" addClass2="" dataAction="" popupid="87" imageWidth={this.props.slide.image_width} imageHeight={this.props.slide.image_height} />
          <ul class="flex fixedSpaces left box-87 equal equalMobile">
          {this.props.slide.list.map(function(fields, index) {
            let ae=parseFloat(index)+parseFloat(5);
            return (
            <li class={"col-3-12 col-tablet-1-2 col-phone-1-1 equalElement margin-top-1 fromCenter ae-"+ae}>
             <Heading addClass="margin-bottom-1" fields={fields}/>
             <BlockText addClass="small opacity-8" fields={fields} />
            </li>
            ); })}
            
          </ul>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="87">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap">
        <div class="fix-10-12">
          <div class="embedVideo popupContent shadow rounded">
            <iframe title="Video" data-src={this.props.slide.youtube_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
export default Slide87;