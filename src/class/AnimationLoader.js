class AnimationLoader {
    //Default Initialisation
    scripts = [];
    constructor() {

        this.initializeScript();
        this.renderAfterReactBuild(this.loadScripts.bind(this));
    }

    renderAfterReactBuild(callback) {
        window.onload= function() {
            setTimeout(function () {
                requestAnimationFrame(callback)
            }, 1000);
        };
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
            this.scripts.push(script);

            let script2 = JSON.parse(JSON.stringify(script));
            script2 = document.createElement("script");
            script2.src = "/js/slides.min.js?509341";
            this.scripts.push(script2);
    }


}

export default AnimationLoader