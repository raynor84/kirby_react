import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText2 from './fields/BlockText2';
class Slide80 extends React.Component {

	render() {
    let image = this.props.slide.videovorschau[0] ? this.props.slide.videovorschau[0].url : undefined ;
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
          <div class="ae-2 fromLeft">
            <Text fields={this.props.slide} addClass="large opacity-8"/>
          </div>
        </div>

        <div class="fix-10-12 margin-top-2">
          <ul class="flex flex-80 fixedSpaces equal reverse">
            <li class="col-6-12">
              <div class="box-80 padding-4 equalElement left ae-3 rounded">
                <BlockText2 addClass="large cropTop ae-5 opacity-8" fields={this.props.slide} /> 
                <div class="margin-top-5 ae-6">
                  <h4 class="smallest">{this.props.slide.author}</h4>
                  <p class="small opacity-8 cropBottom">{this.props.slide.author_description}</p>
                </div>
              </div>
            </li>
            <li class="col-6-12">
              <div class="videoThumbnail rounded shadow wide cover equalElement popupTrigger ae-4 padding-14" data-popup-id="80" style={{"background":"url("+image+")"}}/>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>

  <div class="popup autoplay" data-popup-id="80">
  <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
  <div class="content">
    <div class="container">
      <div class="wrap">
        <div class="fix-10-12">
          <div class="embedVideo popupContent shadow rounded">
            <iframe data-src={this.props.slide.youtube_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
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
export default Slide80;