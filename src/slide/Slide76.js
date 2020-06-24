import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
import BlockText3 from './fields/BlockText3';
import BlockText2 from './fields/BlockText2';
class Slide76 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex reverse verticalCenter">
            <li class="col-6-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
              <Text fields={this.props.slide} addClass="ae-2"/>
              <div class="popupTrigger ae-3 fromRight relative verticalCenter margin-top-3" data-popup-id="76">
                <span class="button play white button-76 absolute">
                  <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#play"></use></svg>
                </span>
                <div class="text-76"><BlockText2 fields={this.props.slide} addClass="smaller bold uppercase cropBottom" /><BlockText3 fields={this.props.slide} addClass="small opacity-8 cropBottom" /></div>
              </div>
            </li>
            <li class="col-6-12 left ae-1 fromAbove">
              <Img fields={this.props.slide} addClass="iphone-76" dataAction="zoom"/>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="76">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap">
        <div class="fix-10-12">
          <div class="embedVideo popupContent shadow rounded">
            <iframe title="Video" data-src={this.props.slide.youtube_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/g8yBqxTiHSs"></iframe>
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
export default Slide76;