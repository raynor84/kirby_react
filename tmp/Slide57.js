import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Logo from './fields/Logo';
class Slide57 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-6 ae-1"/>

          <div class="fix-9-12">
            <ul class="flex equal fixedSpaces margin-top-3">
              <li class="col-4-12 ae-3">
                <div class="fix-3-12 equalElement">
                  <Text fields={this.props.slide} addClass="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2"/>
                  <a class="p opacity-8" href="#">72 Allen Street, New York, ste. 706, 11249</a>
                </div>
                <div class="fix-3-12 equalElement">
                  <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">California Studio</p>
                  <a class="p opacity-8" href="#">312 Richhy Street, Los Angeles, 90026</a>
                </div>
              </li>
              <li class="col-4-12 ae-4">
                <div class="fix-3-12 equalElement">
                  <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Generatal Engquires</p>
                  <a class="p opacity-8" href="mailto:#">general@gmail.com</a>
                </div>
                <div class="fix-3-12 equalElement">
                  <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Questions</p>
                  <a class="p opacity-8" href="mailto:#">questions@gmail.com</a>
                </div>
              </li>
              <li class="col-4-12 ae-5">
                <div class="fix-3-12 equalElement">
                  <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Our blog</p>
                  <a class="p opacity-8" href="#">Trend Breakdown: New Ways to Use the Hamburger Icon</a>
                </div>
                <div class="fix-3-12 equalElement">
                  <p class="smallest bold uppercase opacity-4 margin-top-3 margin-bottom-2">Stay in touch</p>
                  <ul class="social-circles">
                    <li><a class="social-facebook" href="#"><Logo fields={this.props.slide}/></a></li>
                    <li><a class="social-behance" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#behance"/></svg></a></li>
                    <li><a class="social-dribbble" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#dribbble"/></svg></a></li>
                    <li><a class="social-instagram" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#instagram"/></svg></a></li>
                    <li><a class="social-medium" href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#medium"/></svg></a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide57;