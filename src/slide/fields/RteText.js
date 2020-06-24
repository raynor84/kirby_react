import React from 'react';
var parse = require('html-react-parser');

class RteText extends React.Component {
	componentDidMount() {

    }
    getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
        
    renderList(elements, index, type) {

        if(elements[index].type === "ol") {
            let li = [];

            //Foreach ol-elements in elements render List
            for(let i=index; i<elements.length; i++) {
                
                if(elements[i].type==="ol") {
                    li.push(<li>{elements[i].content}</li>);
                } else {
                    break;
                }
            }
            return li;
        }
    }
	render() {
        let ae = this.props.index +3;
        if(this.props.content.type==="paragraph") {
          return <p class={"ae-"+ae}>{this.props.content.content}</p>;
        }
        if(this.props.content.type==="image") {
            return <img src={this.props.content.attrs.src} alt="" />;
        }
        if(this.props.content.type==="hr") {
            return <hr />;
        }
        if(this.props.content.type==="ol") {
            console.log(this.props.elements[this.props.index-1].type);
            if(this.props.elements[this.props.index-1].type!=="ol" ) {
                let li = this.renderList(this.props.elements, this.props.index, "ol");
                return <ol>{li}</ol>
            }
            //return null;
        }
        if(this.props.content.type==="ul") {
            console.log(this.props.elements[this.props.index-1].type);
            if(this.props.elements[this.props.index-1].type!=="ul" ) {
                let li = this.renderList(this.props.elements, this.props.index, "ul");
                return <ol>{li}</ol>
            }
        }
        if(this.props.content.type==="video") {
            let iframeMarkup;
            if(this.props.content.attrs.src.includes("youtu.be")) {

                const videoId = this.getId(this.props.content.attrs.src);
                iframeMarkup = <div class="embedVideo"><iframe title={"Video"} width="560" height="315" src={"//www.youtube.com/embed/" 
                + videoId} frameborder="0" allowfullscreen></iframe></div>;
            
                   
            } else {
                iframeMarkup = <div class="embedVideo"><iframe title={"Video"} width="560" height="315" src={this.props.content.attrs.src} frameborder="0" allowfullscreen></iframe></div>;
            }
            return iframeMarkup;
        }
      
        if(this.props.addClass) {
            return <this.props.content.type class={"smallest ae-"+ae +" "+this.props.addClass}>{this.props.content.content}</this.props.content.type>;
        }
        return <this.props.content.type class={"smallest margin-top-4 margin-bottom-2 ae-"+ae +" "+this.props.addClass}>{this.props.content.content}</this.props.content.type>;

	}
}

export default RteText;




