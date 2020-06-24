import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import PopupButton from './fields/PopupButton';
class Slide88 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <PopupButton fields={this.props.slide} popupid="88" addClass="button rounded cropBottom popupTrigger margin-top-2 ae-2 fromCenter"/>
        </div>

        <div class="fix-12-12">
          <ul class="flex later margin-top-6 left">
            <li class="col-6-12 box-88">
              <div class="quoteBubble ae-4 fromLeft">
                <Text field={this.props.slide.author_text} addClass="larger light cropBottom opacity-8"/>
              </div>
              <p class="margin-top-3 ae-6 fromRight"><strong>{this.props.slide.author}</strong> <span class="opacity-7">{this.props.slide.author_position}</span></p>
            </li>
            <li class="col-6-12">
              <ul class="flex fromBottomRight fixedSpaces margin-top-2">
              {this.props.slide.list.map(function(fields, index) {
                let ae = index +6;
                return (
                <li class={"col-6-12 col-phablet-1-2 ae-"+ae}>
                  <Heading fields={fields} addClass="smaller margin-bottom-1" />
                  <BlockText addClass="opacity-8 margin-bottom-3" fields={fields} />
                </li>
                ); 
              })}
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>

  <div class="popup autoplay" data-popup-id="88">
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
export default Slide88;