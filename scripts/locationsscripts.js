
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildLocations(value);
        });
        console.log(selects[i].value);
    };

    var middleSchools = ['middleschools1', 'middleschools2', 'rokueikanms', 'seirin'];
    var highSchools = ['mikadohs', 'rokueikanhs', 'seirin'];
    var college = ['college'];
    var flowers, burgerqueen, chinese, dorayaki, okonomiyaki, ramen, taiyaki, yakiniku;


    function buildLocations(locationName) {
        var option = document.querySelector('option[value=' + locationName + ']');
        var location = eval(locationName);
        var header = document.createElement("h2");
        viewer.innerHTML = "";
        header.innerHTML = option.innerHTML;
        viewer.appendChild(header);
        if (location != undefined) {
            for (let i = 0; i < location.length; i++) {
                let src = "images/locations/" + location[i] + ".png";
                let img = document.createElement("img");
                img.src = src;
                viewer.appendChild(img);
            }
        } else {
            let src = "images/locations/" + locationName + ".png";
            let img = document.createElement("img");
            img.src = src;
            viewer.appendChild(img);
        }
    };
};



/*
    let value = selectValue;
    
    var viewer = document.getElementById("viewer");
    var aRankDd = document.getElementById("arank");
    var bRankDd = document.getElementById("brank");
    var neighborDd = document.getElementById("neighbors");
    var otherDd = document.getElementById("other");
    var selectList = [aRankDd, bRankDd, neighborDd, otherDd];*/