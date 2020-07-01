class AnimationLoader {
    //Default Initialisation
    scripts = [];
    constructor() {

        this.initializeScript();
        this.unloadScripts();
        this.renderAfterReactBuild(this.loadScripts.bind(this));
    }

    renderAfterReactBuild(callback) {
        setTimeout(function () {
            callback();
        }, 2000);
    }

    //Load One Script than wait till Loaded, than append other script
    loadScripts() {

            var prevScript;
            this.scripts.forEach((script) => {
                if(prevScript) {
                    prevScript.onload = function() {
                        document.head.appendChild(script);
                    }
                } else {
                    document.head.appendChild(script);
                }
                prevScript = script;
            });
    }

    initializeScript() {

            //Load Scripts
            var script = document.createElement("script");
            script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
            script.id ="jquery";
            this.scripts.push(script);

            let script3= document.createElement("script");
            script3.src = "/js/swiper.min.js";
            script3.id="swiper";
            this.scripts.push(script3);

            let script2 = JSON.parse(JSON.stringify(script));
            script2 = document.createElement("script");
            script2.src = "/js/slides.min.js?509341";
            script2.id = "slides";
            this.scripts.push(script2);

            
    }

    unloadScripts() {
        window.pluginsAttached = 0;
        let elem=document.getElementById("jquery");
        if(elem) {
            elem.parentNode.removeChild(elem);
            elem=document.getElementById("slides");
            elem.parentNode.removeChild(elem);
            elem=document.getElementById("swiper");
            elem.parentNode.removeChild(elem);
        }
        
    }


}

export default AnimationLoader