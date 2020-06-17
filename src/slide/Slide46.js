import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import Img from './fields/Img';
import VideoThumbnail from './fields/VideoThumbnail';
class Slide46 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-9-12 toCenter margin-bottom-5">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
        </div>
        <div class="fix-12-12">
          <ul class="flex later equal left">
            <li class="col-4-12 box-46">
              <ButtonA fields={this.props.slide}/>
              <h4 class="equalElement smaller margin-top-3 margin-bottom-1 ae-4">Inspiration</h4>
              <div class="ae-5"><p class="opacity-8">Art is making something out of nothing and selling it.</p></div>
            </li>
            <li class="col-4-12 box-46">
              <VideoThumbnail fields={this.props.slide} popupid="46-46"/>
              <h4 class="equalElement smaller margin-top-3 margin-bottom-1 ae-5">Information</h4>
              <div class="ae-6"><p class="opacity-8">Designers are very fickle. I never wanted to be a victim of that.</p></div>
            </li>
            <li class="col-4-12 box-46">
              <ButtonB fields={this.props.slide}/>
              <h4 class="equalElement smaller margin-top-3 margin-bottom-1 ae-6">Best Kept Secret</h4>
              <div class="ae-7"><p class="opacity-8">Sometimes you have to keep ideas for decades before they have any use.</p></div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="46-46">
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
export default Slide46;