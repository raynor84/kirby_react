import Slide29 from '../slide/Slide29';
import Slide28 from '../slide/Slide28';
import Slide27 from '../slide/Slide27';
import Slide26 from '../slide/Slide26';
import Slide25 from '../slide/Slide25';
import Slide24 from '../slide/Slide24';
import Slide23 from '../slide/Slide23';
import Slide22 from '../slide/Slide22';
import Slide21 from '../slide/Slide21';
import Slide20 from '../slide/Slide20';
import Slide19 from '../slide/Slide19';
import Slide18 from '../slide/Slide18';
import Slide07 from '../slide/Slide07';
import Slide06 from '../slide/Slide06';
import Slide05 from '../slide/Slide05';
import Slide04 from '../slide/Slide04';
import Slide03 from '../slide/Slide03';
import Slide02 from '../slide/Slide02';
import Slide01 from '../slide/Slide01';
import Slide17 from '../slide/Slide17';
import Slide16 from '../slide/Slide16';
import Slide15 from '../slide/Slide15';
import Slide14 from '../slide/Slide14';

import Slide10 from '../slide/Slide10';
import Slide11 from '../slide/Slide11';

// Use ES6 Object Literal Property Value Shorthand to maintain a map
// where the keys share the same names as the classes themselves
const classes = {
    Slide10,
    Slide11, 
	Slide14,
	Slide15,
	Slide16,
	Slide17,
	Slide01,
	Slide02,
	Slide03,
	Slide04,
	Slide05,
	Slide06,
	Slide07,
	Slide18,
	Slide19,
	Slide20,
	Slide21,
	Slide22,
	Slide23,
	Slide24,
	Slide25,
	Slide26,
	Slide27,
	Slide28,
	Slide29,
};

class DynamicClass {
    constructor (className) {
        return classes[className];
    }
}

export default DynamicClass;