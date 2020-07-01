import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import BlockText from './fields/BlockText';
import PopupButton from './fields/PopupButton';
import { Link } from "react-router-dom";

class Slide71 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 margin-bottom-2"/>
          <div class="ae-2"><Text fields={this.props.slide} addClass="larger light opacity-8 margin-bottom-2"/></div>
          <PopupButton fields={this.props.slide} popupid="71"/>
        </div>
        <div class="fix-12-12 margin-top-4">
          <ul class="flex fixedSpaces later equal left flex-71">
          {this.props.slide.list.map(function(fields, index) { 
            let ae = index + 3;
            return (
            <li class={"col-4-12 ae-"+ae}>
              <Link to={typeof fields.url[0] === "object" ? fields.url[0].link : undefined} class="cell-71 rounded equalElement" nofollow={fields.follow} target={fields.target}>
                  <i class="material-icons">{fields.material_icon}</i>
                  <Heading addClass="margin-bottom-1" fields={fields} />
                  <BlockText addClass="small opacity-8" fields={fields} />
              </Link>
            </li>
            );
          })}
          </ul>
        </div>

      </div>
    </div>
  </Section>
  <div class="popup autoplay" data-popup-id="71">
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
export default Slide71;