import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
import ButtonC from './fields/ButtonC';
import ButtonD from './fields/ButtonD';
class Slide84 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <ul class="flex flex-84 noSpaces equal equalMobile ae-2 fromCenter">
            <li class="col-3-12 ae-3" style="background: #F5FBFE">
              <h4 class="smaller margin-bottom-1">Moon</h4>
              <div class="price ae-5"><span class="currency">$</span>0</div>
              <div class="ae-5">
                <Text fields={this.props.slide} addClass="smallest uppercase bolder opacity-4"/>
              </div>
              <div class="margin-top-3 margin-bottom-3 equalElement ae-6">
                <ul class="p small">
                  <li><strong>25 Free Images</strong></li>
                  <li class="opacity-8">Custom Domain</li>
                  <li class="opacity-8">24/7 Customer Support</li>
                </ul>
              </div>
              <ButtonA fields={this.props.slide}/>
            </li>
            <li class="col-3-12 ae-4">
              <h4 class="smaller margin-bottom-1">Planet</h4>
              <div class="price ae-6"><span class="currency">$</span>6</div>
              <div class="ae-6">
                <p class="smallest uppercase bolder opacity-4">Billed per Month</p>
              </div>
              <div class="margin-top-3 margin-bottom-3 equalElement ae-7">
                <ul class="p small">
                  <li><strong>60 Free Images</strong></li>
                  <li><strong>Mobile-Optimized</strong></li>
                  <li class="opacity-8">Custom Domain</li>
                  <li class="opacity-8">24/7 Customer Support</li>
                </ul>
              </div>
              <ButtonB fields={this.props.slide}/>
            </li>
            <li class="col-3-12 ae-5">
              <h4 class="smaller margin-bottom-1">Galaxy</h4>
              <div class="price ae-7"><span class="currency">$</span>9</div>
              <div class="ae-7">
                <p class="smallest uppercase bolder opacity-4">Billed per Month</p>
              </div>
              <div class="margin-top-3 margin-bottom-3 equalElement ae-8">
                <ul class="p small">
                  <li><strong>60 Free Images</strong></li>
                  <li><strong>Mobile-Optimized</strong></li>
                  <li><strong>No Transaction Fees</strong></li>
                  <li class="opacity-8">Custom Domain</li>
                  <li class="opacity-8">24/7 Customer Support</li>
                </ul>
              </div>
              <ButtonC fields={this.props.slide}/>
            </li>
            <li class="col-3-12 ae-5">
              <h4 class="smaller margin-bottom-1">Galaxy</h4>
              <div class="price ae-7"><span class="currency">$</span>24</div>
              <div class="ae-7">
                <p class="smallest uppercase bolder opacity-4">Billed per Month</p>
              </div>
              <div class="margin-top-3 margin-bottom-3 equalElement ae-8">
                <ul class="p small">
                  <li><strong>60 Free Images</strong></li>
                  <li><strong>Mobile-Optimized</strong></li>
                  <li><strong>No Transaction Fees</strong></li>
                  <li><strong>Unlimited Projects</strong><span class="helpBubble relative"><div class="helpMessage">The most innovative designers <strong>consciously</strong> reject the standard and cultivate.</div></span></li>
                  <li class="opacity-8">Custom Domain</li>
                  <li class="opacity-8">24/7 Customer Support</li>
                </ul>
              </div>
              <ButtonD fields={this.props.slide}/>
            </li>
          </ul>
        </div> 
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide84;