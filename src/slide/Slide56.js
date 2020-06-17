import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Logo from './fields/Logo';
class Slide56 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light margin-bottom-4 ae-2"/>
          <ul class="flex equal fixedSpaces margin-top-3">
            <li class="col-4-12 ae-3">
              <div class="fix-3-12 equalElement">
                <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">HQ Studio</p>
                <p><a class="opacity-8" href="#">72 Allen Street, New York, ste. 706, 11249</a></p>
              </div>
              <div class="fix-3-12 equalElement">
                <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">California Studio</p>
                <p><a class="opacity-8" href="#">312 Richhy Street, Los Angeles, 90026</a></p>
              </div>
            </li>
            <li class="col-4-12 ae-4">
              <div class="fix-3-12 equalElement">
                <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Generatal Engquires</p>
                <p><a class="opacity-8" href="mailto:#">general@gmail.com</a></p>
              </div>
              <div class="fix-3-12 equalElement">
                <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Questions</p>
                <p><a class="opacity-8" href="mailto:#">questions@gmail.com</a></p>
              </div>
            </li>
            <li class="col-4-12 ae-5">
              <div class="fix-3-12 equalElement">
                <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Our blog</p>
                <p><a class="opacity-8" href="#">Trend Breakdown: New Ways to Use the Hamburger Icon</a></p>
              </div>
              <div class="fix-3-12 equalElement">
                <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Stay in touch</p>
                <ul class="social-circles">
                  <li><a class="social-facebook" href="#"><Logo fields={this.props.slide}/></a></li>
                  <li><a class="social-whatsapp" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#whatsapp"/></svg></a></li>
                  <li><a class="social-youtube" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#youtube"/></svg></a></li>
                  <li><a class="social-linkedin" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#linkedin"/></svg></a></li>
                  <li><a class="social-twitter" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter"/></svg></a></li>
                </ul>
              </div>
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
export default Slide56;