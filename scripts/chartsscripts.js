
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildCharts(value);
        });
        console.log(selects[i].value);
    };

    var enlistment, popularity, factions, schools, academics, drawing, fitness, romantic;


    function buildCharts(chartName) {
        var option = document.querySelector('option[value=' + chartName + ']');
        var chart = eval(chartName);
        var header = document.createElement("h2");
        viewer.innerHTML = "";
        header.innerHTML = option.innerHTML;
        viewer.appendChild(header);
            let src = "images/charts/" + chartName + ".png";
            let img = document.createElement("img");
            img.src = src;
            let link = document.createElement("a");
            link.href = src;
            link.target = '_blank';
            viewer.appendChild(link);        
            link.appendChild(img); 
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