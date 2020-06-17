import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import ButtonC from './fields/ButtonC';
import ButtonD from './fields/ButtonD';
import ButtonE from './fields/ButtonE';
class Slide97 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap padding-top-phablet-5">

        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="ae-2 large margin-bottom-4"/>
        </div>
        <div class="fix-12-12">
          <div class="frame-97 ae-3">
            <p class="white calendar-97 absolute"><span class="center uppercase block bold month">jan</span><span class="number normal">23</span></p>
            <p class="large light align-left cropBottom inline-block">
              <span class="margin-left-10 middle margin-left-phablet-0 title-group-97">New Dewayne</span>
              <span class="inline-block middle phablet-block margin-top-phablet-1">Atlanta, GA</span>
              <ButtonA fields={this.props.slide}/>
            </p>
          </div>
          <div class="frame-97 ae-4">
            <p class="white calendar-97 absolute"><span class="center uppercase block bold month">jan</span><span class="number normal">24</span></p>
            <p class="large light align-left cropBottom inline-block">
              <span class="margin-left-10 middle margin-left-phablet-0 title-group-97">Vinoy Park</span>
              <span class="inline-block middle phablet-block margin-top-phablet-1">Cristalhaven</span>
              <ButtonB fields={this.props.slide}/>
            </p>
          </div>
          <div class="frame-97 ae-5">
            <p class="white calendar-97 absolute"><span class="center uppercase block bold month">jan</span><span class="number normal">26</span></p>
            <p class="large light align-left cropBottom inline-block">
              <span class="margin-left-10 middle margin-left-phablet-0 title-group-97">Buckridgebury</span>
              <span class="inline-block middle phablet-block margin-top-phablet-1">North Eloisa</span>
              <ButtonC fields={this.props.slide}/>
            </p>
          </div>
          <div class="frame-97 ae-6">
            <p class="white calendar-97 absolute"><span class="center uppercase block bold month">jan</span><span class="number normal">28</span></p>
            <p class="large light align-left cropBottom inline-block">
              <span class="margin-left-10 middle margin-left-phablet-0 title-group-97">Lake Brennonchester</span>
              <span class="inline-block middle phablet-block margin-top-phablet-1">Lake Marinaview</span>
              <ButtonD fields={this.props.slide}/>
            </p>
          </div>
          <div class="frame-97 ae-7 opacity-5">
            <p class="white calendar-97 absolute"><span class="center uppercase block bold month">jan</span><span class="number normal">30</span></p>
            <p class="large light align-left cropBottom inline-block">
              <span class="margin-left-10 middle margin-left-phablet-0 title-group-97">West Keaganstad</span>
              <span class="inline-block middle phablet-block margin-top-phablet-1">South Austen</span>
              <ButtonE fields={this.props.slide}/>
            </p>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide97;