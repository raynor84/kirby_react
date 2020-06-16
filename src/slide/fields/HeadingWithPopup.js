import React from 'react';


class Logo extends React.Component {
	componentDidMount() {

	}
	render() {

	  return (
			<h1 class="cropBottom ae-1 fromCenter smaller done">
            {this.props.fields.title_left}
            <span class="button play small white popupTrigger button-7 shift-up-2" data-popup-id="7">{/*https://designmodo.com/slides/app/preview/slide/07*/}
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="http://localhost:3000/#play"></use></svg>
            </span>
            {this.props.fields.title_right}
          </h1>
		);
	}
}

export default Logo;


