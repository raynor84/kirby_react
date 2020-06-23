import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import TextBlock from './fields/BlockText';
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

          {this.props.slide.list.map(function(fields, index) {
            return (
            <li key={index} class="col-4-12 box-46">
            <a href={typeof fields.url[0]==="object" ? fields.url[0].link: undefined} class="button empty shadow rounded crop ae-3 done" nofollow={fields.follow} target={fields.target}>
                <Img 
                  addClass="rounded" 
                  fields={fields}
                  />
            </a>
            <Heading fields={fields} addClass="margin-top-3 margin-bottom-1 ae-4"/>
          
              <div class="ae-5"><TextBlock fields={fields} /></div>
            </li>
            );
          })}
           
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