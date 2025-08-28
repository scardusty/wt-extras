
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildPoll(value);
        });
        console.log(selects[i].value);
    };

    var vday2014 = [1,2];
    var vday2015 = [1,2];
    var vday2016 = [1,2,3];
    var vday2017 = [1,2,3];
    var vday2019 = [1,2,3];
    var pop1 = [1,2,3,4,5];
    var pop2 = [1,2,3,4,5];


    function buildPoll(pollName) {
        var option = document.querySelector('option[value=' + pollName + ']');
        var poll = eval(pollName);
        var header = document.createElement("h2");
        header.innerHTML = option.innerHTML;
        viewer.innerHTML = "";
        viewer.appendChild(header);
        for (let i = 0; i < poll.length; i++) {
            let src = "images/vday/" + pollName + "-" + poll[i] + ".png";
            let img = document.createElement("img");
            img.src = src;
            viewer.appendChild(img);
        }

    };
}


/*
    let value = selectValue;
    
    var viewer = document.getElementById("viewer");
    var aRankDd = document.getElementById("arank");
    var bRankDd = document.getElementById("brank");
    var neighborDd = document.getElementById("neighbors");
    var otherDd = document.getElementById("other");
    var selectList = [aRankDd, bRankDd, neighborDd, otherDd];*/