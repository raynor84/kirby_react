import React from 'react';


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
        

	render() {
        let ae = this.props.index +3;
        if(this.props.content.type==="paragraph") {
          return <p class={"ae-"+ae}>{this.props.content.content}</p>;
        }
        if(this.props.content.type==="image") {
            return <img src={this.props.content.attrs.src} />;
        }
        if(this.props.content.type==="hr") {
            return <hr />;
        }
        if(this.props.content.type==="ol") {
            return (<ol>
                    <li>
                        {this.props.content.content}
                    </li>
                    </ol>);
        }
        if(this.props.content.type==="video") {
            const videoId = this.getId(this.props.content.attrs.src);
        const iframeMarkup = <div class="embedVideo"><iframe width="560" height="315" src={"//www.youtube.com/embed/" 
        + videoId} frameborder="0" allowfullscreen></iframe></div>;
    
            return iframeMarkup;
        }
        
        if(this.props.addClass) {
            return <this.props.content.type class={"smallest ae-"+ae +" "+this.props.addClass}>{this.props.content.content}</this.props.content.type>;
        }
        return <this.props.content.type class={"smallest margin-top-4 margin-bottom-2 ae-"+ae +" "+this.props.addClass}>{this.props.content.content}</this.props.content.type>;

	}
}

export default RteText;




