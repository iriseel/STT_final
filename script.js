
const video = document.querySelector("video");

window.onload = function () {
    // localStorage.clear();

    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result");

    const sliderContainer = document.querySelector(".slider-container");
    const widthSlider = document.getElementById("width-slider");

    let currentFontFamily = localStorage.getItem("savedFontFamily");
    let currentFontSize = localStorage.getItem("savedFontSize");
    let currentFontColor = localStorage.getItem("savedFontColor");
    let currentFontVariation = localStorage.getItem("savedFontVariation");
    let currentSliderValue = localStorage.getItem("savedSliderValue");
    let currentVideoDisplay = localStorage.getItem("savedVideoDisplay");
    result.style.fontFamily = currentFontFamily;
    result.style.fontSize = currentFontSize;
    result.style.color = currentFontColor;
    result.style.fontVariationSettings = currentFontVariation;
    widthSlider.value = currentSliderValue;
    video.style.display = currentVideoDisplay;
    console.log(currentFontFamily, currentFontSize, currentFontVariation);
    
    displayFontStyles(currentFontFamily);

    let FirstUse;
    // console.log("FirstUse", FirstUse);

    if (!FirstUse) {
        FirstUse = {};
        // Set the initial value of isFirstUse for each element
        FirstUse["DeadisBetter"] = true;
        FirstUse["HeartBeat_inside"] = true;
        FirstUse["HeartBeat_merged"] = true;
        FirstUse["HeartBeat_outside"] = true;
        FirstUse["HeartBeat_stroke"] = true;
        FirstUse["Subbookkeeper"] = true;
        FirstUse["Dirts"] = true;
        FirstUse["Wifi_vfvf"] = true;
        FirstUse["Signal_Inflate"] = true;
        FirstUse["Spritch_AVF"] = true;
        FirstUse["Spritch_BVF"] = true;
        FirstUse["Signal_Grow"] = true;
        // console.log("first", FirstUse["DeadisBetter"]);
    } else {
        //localStorage stores data as strings, so when you retrieve the value of "savedFirstUse", it will be a string. To convert it back into a JavaScript object, you can use JSON.parse().
        FirstUse = JSON.parse(localStorage.getItem("savedFirstUse"));
        // console.log("FirstUse", FirstUse["DeadisBetter"]);
    }
    // console.log("********************************");
    for (let key in FirstUse) {
        console.log(`${key}: ${FirstUse[key]}`);
    }

    if ("webkitSpeechRecognition" in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (event) {
            var interimTranscript = "";
            var finalTranscript = "";

            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");

                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    wordCount = interimTranscript.split(" ").length;

                    localStorage.setItem("savedFontFamily", currentFontFamily);

                    localStorage.setItem("savedFontSize", currentFontSize);

                    localStorage.setItem("savedFontColor", currentFontColor);

                    localStorage.setItem(
                        "savedFontVariation",
                        currentFontVariation
                    );

                    localStorage.setItem(
                        "savedSliderValue",
                        currentSliderValue
                    );

                    localStorage.setItem(
                        "savedVideoDisplay",
                        currentVideoDisplay
                    );

                    localStorage.setItem("savedFirstUse", FirstUse);

                    // Reload the page with the new URL after a pause
                    setTimeout(() => location.reload(), 1000);
                } else {
                    interimTranscript += transcript;
                    wordCount = interimTranscript.split(" ").length;
                }
            }

            result.innerHTML =
                finalTranscript +
                '<span style="color: #999">' +
                interimTranscript +
                "</span>";

            resultContainer.scrollTop = resultContainer.scrollHeight;
        };

        recognition.onerror = function (event) {};

        //speech recognition automatically turns off after some silence, so restarting it on end for continuous listening
        recognition.addEventListener("end", () => {
            // console.log("Speech recognition ended. Restarting...");
            recognition.start();
        });
    } else {
        result.innerHTML =
            "Your browser is not supported. Please download Google chrome or Update your Google chrome!!";
    }

    const fontNames = document.querySelectorAll('.fontName');

    const fontMappings = {
        AsTheyDraw_italic: {
            fontFamily: 'AsTheyDraw_italic',
            fontSize: '3em'
        },
        AsTheyDraw_medium: {
            fontFamily: 'AsTheyDraw_medium',
            fontSize:  '3em' 
        },
        AsTheyDrawMonomono: {
            fontFamily: 'AsTheyDrawMonomono',
            fontSize:  '3em' 
        },
        Billboards_regular: {
            fontFamily: 'Billboards_regular',
            fontSize:  '4em' 
        },
        Billboards_stencil: {
            fontFamily: 'Billboards_stencil',
            fontSize:  '4em' 
        },
        DeadisBetter: {
            fontFamily: 'DeadisBetter',
            fontSize:  '4em' 
        },
        Dirts: {
            fontFamily: 'Dirts',
            fontSize:  '4em' 
        },
        FairGame_regular: {
            fontFamily: 'FairGame_regular',
            fontSize:  '3em' 
        },
        FairGame_italic: {
            fontFamily: 'FairGame_italic',
            fontSize:  '3em' 
        },
        FairGame_rotated: {
            fontFamily: 'FairGame_rotated',
            fontSize:  '3em' 
        },
        HeartBeat_inside: {
            fontFamily: 'HeartBeat_inside',
            fontSize:  '6em' 
        },
        HeartBeat_merged: {
            fontFamily: 'HeartBeat_merged',
            fontSize:  '6em' 
        },
        HeartBeat_outside: {
            fontFamily: 'HeartBeat_outside',
            fontSize:  '6em' 
        },
        HeartBeat_stroke: {
            fontFamily: 'HeartBeat_stroke',
            fontSize:  '6em' 
        },
        Wifi_bold: {
            fontFamily: 'Wifi_bold',
            fontSize:  '3em' 
        },
        Wifi_bold_extended: {
            fontFamily: 'Wifi_bold_extended',
            fontSize:  '3em' 
        },
        Wifi_bold_extended_italic: {
            fontFamily: 'Wifi_bold_extended_italic',
            fontSize:  '3em' 
        },
        Wifi_bold_italic: {
            fontFamily: 'Wifi_bold_italic',
            fontSize:  '3em' 
        },
        Wifi_condensed: {
            fontFamily: 'Wifi_condensed',
            fontSize:  '3em' 
        },
        Wifi_condensed_italic: {
            fontFamily: 'Wifi_condensed_italic',
            fontSize:  '3em' 
        },
        Wifi_regular: {
            fontFamily: 'Wifi_regular',
            fontSize:  '3em' 
        },
        Wifi_regular_italic: {
            fontFamily: 'Wifi_regular_italic',
            fontSize:  '3em' 
        },
        Wifi_vfvf: {
            fontFamily: 'Wifi_vfvf',
            fontSize:  '3em' 
        },
        OpenStudios_body: {
            fontFamily: 'OpenStudios_body',
            fontSize:  '3em' 
        },
        OpenStudios_headline: {
            fontFamily: 'OpenStudios_headline',
            fontSize:  '3em' 
        },
        PaaaperChain: {
            fontFamily: 'PaaaperChain',
            fontSize:  '4em' 
        },
        PoliticsofResponse_0: {
            fontFamily: 'PoliticsofResponse_0',
            fontSize:  '5em' 
        },
        PoliticsofResponse_100: {
            fontFamily: 'PoliticsofResponse_100',
            fontSize:  '5em' 
        },
        PoliticsofResponse_300: {
            fontFamily: 'PoliticsofResponse_300',
            fontSize:  '5em' 
        },
        PoliticsofResponse_500: {
            fontFamily: 'PoliticsofResponse_500',
            fontSize:  '5em' 
        },
        PoliticsofResponse_700: {
            fontFamily: 'PoliticsofResponse_700',
            fontSize:  '5em' 
        },
        PoliticsofResponse_1000: {
            fontFamily: 'PoliticsofResponse_1000',
            fontSize:  '5em' 
        },
        Signal_Grow: {
            fontFamily: 'Signal_Grow',
            fontSize:  '3em' 
        },
        Signal_Inflate: {
            fontFamily: 'Signal_Inflate',
            fontSize:  '3em' 
        },
        Spritch_AVF: {
            fontFamily: 'Spritch_AVF',
            fontSize:  '5em' 
        },
        Spritch_BVF: {
            fontFamily: 'Spritch_BVF',
            fontSize:  '5em' 
        },
        Subbookkeeper: {
            fontFamily: 'Subbookkeeper',
            fontSize:  '4em' 
        },
      };
    
    fontNames.forEach((fontName) => {
        // Note: I added .fontName into every fontStyle to hack this function so it also works for styles and not just the names
        const key = fontName.classList[0]; // Assuming the first class is unique
        const fontAttributes = fontMappings[key];
        const fontFamily = fontAttributes.fontFamily;
        fontName.style.fontFamily = fontFamily;
        
        const fontSize = fontAttributes.fontSize;
        fontName.style.fontSize = `calc(${fontSize} *.4)`;

        fontName.addEventListener('click', function () {
            reset();
        
            // Apply the selected font style to the page content
            result.style.fontFamily = fontFamily;
            result.style.fontSize = fontAttributes.fontSize;
            displayFontStyles(fontFamily);
            
            update_font();
        });
    });


    function reset() {
        result.style.fontSize = "3em";
        result.style.color = "white";
        video.style.display = "none";
    }

    function update_font(vf, variable_font) {
        // console.log(vf);
        console.log(FirstUse[`${variable_font}`]);
        if (FirstUse[`${variable_font}`]) {
            // result.classList.remove("vf_animation");
            // result.classList.add("vf_animation");
            // console.log(result);
        }
        FirstUse[`${variable_font}`] = false;
        // console.log("changed var", FirstUse[variable_font]);
        currentFontFamily = result.style.fontFamily;
        currentFontSize = result.style.fontSize;
        currentFontColor = result.style.color;
        currentVideoDisplay = video.style.display;
    }

    widthSlider.addEventListener("input", () => {
        sliderValue = parseInt(widthSlider.value);
        set_variable();
    });

    function set_variable() {
        let variableValue = widthSlider.value;
        if (
            currentFontFamily == "DeadisBetter" ||
            currentFontFamily == "HeartBeat_inside" ||
            currentFontFamily == "HeartBeat_merged" ||
            currentFontFamily == "HeartBeat_outside" ||
            currentFontFamily == "HeartBeat_stroke" ||
            currentFontFamily == "Subbookkeeper"
        ) {
            result.style.fontVariationSettings = `"wdth" ${variableValue}`;
        } else if (
            currentFontFamily == "Dirts" ||
            currentFontFamily == "Wifi_vfvf" ||
            currentFontFamily == "Signal_Inflate" ||
            currentFontFamily == "Spritch_AVF" ||
            currentFontFamily == "Spritch_BVF"
        ) {
            result.style.fontVariationSettings = `"wght" ${variableValue}`;
            // console.log("spritch");
        } else if (currentFontFamily == "Signal_Grow") {
            result.style.fontVariationSettings = `"wght" 100, "HGHT" ${variableValue}`;
        }
        currentFontVariation = result.style.fontVariationSettings;
        currentSliderValue = widthSlider.value;
    }
};

//COLLAPSIBLE MENUS
var menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
    const button = menu.querySelector("button");
    button.addEventListener("click", function() {
        const menuContent = menu.querySelector(".menuContent.visible");
        button.classList.toggle("active");
        if (menuContent.style.maxHeight){
          menuContent.style.maxHeight = null;
        } else {
          menuContent.style.maxHeight = menuContent.scrollHeight + "px";
        } 
    })
});


//setting what font styles to show in "mode/features," based on what font has already been chosen
function displayFontStyles(currentFont) {
    if (currentFont == "AsTheyDraw_italic" || currentFont == "AsTheyDraw_medium" || currentFont == "AsTheyDrawMonomono") {
        document.querySelector(".menuContent.AsTheyDraw").classList.add("visible");
    }
    else if (currentFont == "Billboards_regular" || currentFont == "Billboards_stencil") {
        document.querySelector(".menuContent.Billboards").classList.add("visible");
        if (currentFont == "Billboards_stencil") {
            result.style.color = "black";
            video.style.display = "block";
        }
    }
    else if (currentFont == "DeadisBetter") {
        document.querySelector(".menuContent.DeadisBetter").classList.add("visible");
    }
    else if (currentFont == "Dirts") {
        document.querySelector(".menuContent.Dirts").classList.add("visible");
    }
    else if (currentFont == "FairGame_regular" || currentFont == "FairGame_italic" || currentFont == "FairGame_rotated") {
        document.querySelector(".menuContent.FairGame").classList.add("visible");
    }
    else if (currentFont == "HeartBeat_inside" || currentFont == "HeartBeat_merged" || currentFont == "HeartBeat_outside" || currentFont == "HeartBeat_stroke") {
        document.querySelector(".menuContent.HeartBeat").classList.add("visible");
    }
    else if (currentFont == "Wifi_bold" || currentFont == "Wifi_bold_extended" || currentFont == "Wifi_bold_extended_italic" || currentFont == "Wifi_bold_italic" || currentFont == "Wifi_condensed" || currentFont == "Wifi_condensed_italic" || currentFont == "Wifi_regular" || currentFont == "Wifi_regular_italic" || currentFont == "Wifi_vfvf") {
        document.querySelector(".menuContent.Wifi").classList.add("visible");
    }
    else if (currentFont == "OpenStudios_body" || currentFont == "OpenStudios_headline") {
        document.querySelector(".menuContent.OpenStudios").classList.add("visible");
    }
    else if (currentFont == "PaaaperChain") {
        document.querySelector(".menuContent.PaaaperChain").classList.add("visible");
    }
    else if (currentFont == "PoliticsofResponse_0" || currentFont == "PoliticsofResponse_100" || currentFont == "PoliticsofResponse_300" || currentFont == "PoliticsofResponse_500" || currentFont == "PoliticsofResponse_700" || currentFont == "PoliticsofResponse_1000") {
        document.querySelector(".menuContent.PoliticsofResponse").classList.add("visible");
    }
    else if (currentFont == "Signal_Grow" || currentFont == "Signal_Inflate") {
        document.querySelector(".menuContent.Signal").classList.add("visible");
    }
    else if (currentFont == "Spritch_AVF" || currentFont == "Spritch_BVF") {
        document.querySelector(".menuContent.Spritch").classList.add("visible");
    }
    else if (currentFont == "Subbookkeeper") {
        document.querySelector(".menuContent.Subbookkeeper").classList.add("visible");
    }
}