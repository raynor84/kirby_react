import React from 'react';

class Section extends React.Component {

  
    render() {
        return (
            <section class={"slide "+this.props.slide._key+" "+this.props.slide.hintergrund+" "+this.props.slide.fade + " "+this.props.slide.hoehe + " "+this.props.slide.abstand+" "+this.props.slide.whiteslide+ " "+this.props.addClass} >
                
                <div class="content">
                    {this.props.children}
                </div>
                
                {typeof this.props.slide.hintergrundbild[0]==='object' && this.props.slide.hintergrundbild[0] !== null && <div class="background" style={{backgroundImage: "url("+this.props.slide.hintergrundbild[0].url+")"}}></div>}
                
            </section>
        );
    }
}
export default Section