import React from 'react';


class VideoThumbnail extends React.Component {

  
    render() {
        if(typeof this.props.fields.videovorschau[0]!=='undefined') {
            return (
                <div class="videoThumbnail rounded shadow popupTrigger ae-1 fromCenter margin-bottom-tablet-4" data-popup-id={this.props.popupid}>
                    <img class="wide" src={this.props.fields.videovorschau[0].url} alt={this.props.fields.alternativtext}/>
                </div>
                );
        } else {
            return null;
        }

    }
}
export default VideoThumbnail;