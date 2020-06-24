import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide60 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex">
            <li class="col-6-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-2 fromLeft"/>
              <Text fields={this.props.slide} addClass="large margin-bottom-3 ae-3 fromLeft"/>
              <ul class="tabs controller uppercase bold ae-4 fromCenter" data-slider-id="60-60">
              {this.props.slide.list.map(function(fields, index) {
            return <li class={index=== 0 ? "selected": ""}>{fields.text}</li>
            })}
            
              </ul>
            </li>
            <li class="col-6-12 left ae-5 fromCenter">
              <ul class="slider animated margin-top-tablet-4" data-slider-id="60-60">
              {this.props.slide.list.map(function(fields, index) {
            return <li class={index=== 0 ? "selected fromCenter": "fromCenter"}>
              <div class="popupTrigger videoThumbnail shadow rounded" data-popup-id={"60-"+index}>
                <Img key={index} imageField={fields.image[0]} addClass="wide"/>
                </div>  
                 </li>;
            })}
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </Section>
  {this.props.slide.list.map(function(fields, index) {
   
   return (
 <div class="popup autoplay" data-popup-id={"60-"+index}>
   <div class="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close"></use></svg></div>
   <div class="content">
     <div class="container">
       <div class="wrap">
         <div class="fix-10-12">
           <div class="embedVideo popupContent shadow rounded">
             <iframe title="Video" data-src={fields.youtube_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
           </div>
         </div>
       </div>
     </div>
 </div>
 </div>
);
 })}
</React.Fragment>

		);
	}
}
export default Slide60;