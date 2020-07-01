import React from 'react';

class fetchURL extends React.Component {
    websites = {
      "mysite.localhost": "http://localhost/my-site.com",
      "localhost": "http://localhost/kirby"
    }
    getKirbyFetch() {

      var url_string = window.location.href;

        var myurl = new URL(url_string);
        let url ="";
        console.log(myurl);
        url_string = myurl.pathname.slice(myurl.pathname.indexOf("pages"));
        var site = "";
        for(const key of Object.keys(this.websites)) {
          console.log(key);
          if(key===myurl.hostname) {
            site= this.websites[key];
          }
        }
        console.log(site);
        if(url_string!=="/") {
          url = site+"/api"+  myurl.pathname;
    
        } else {
          url = site + "/api/pages/test";
        }
        return url
    }
 

}

export default fetchURL