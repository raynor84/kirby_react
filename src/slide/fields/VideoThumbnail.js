import React from 'react';


class VideoThumbnail extends React.Component {

  
    render() {
        if(typeof this.props.fields.videovorschau[0]!=='undefined') {
            let addClass= this.props.addClass ? this.props.addClass : "videoThumbnail rounded shadow popupTrigger ae-1 fromCenter margin-bottom-tablet-4";
            return (
                <div class={addClass} data-popup-id={this.props.popupid}>
                    <img class={this.props.addClass2!==undefined ? this.props.addClass2: "wide"}
                        src={this.props.fields.videovorschau[0].url} 
                        alt={this.props.fields.alternativtext}
                        width={this.props.imageWidth}
                        height={this.props.imageHeight}
                        />
                </div>
                );
        } else {
            return null;
        }

    }
}
export default VideoThumbnail;