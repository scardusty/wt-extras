
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildVol(value);
        });
        console.log(selects[i].value);
    };

    var v2 = [1], 
    v3 = [1, 2, 3], 
    v4 = [1], 
    v5 = [1, 2, 3, 4], 
    v6 = [1,2,3,4], 
    v7 = [1], 
    v8 = [1], 
    v9 = [1,2], 
    v10 = [1], 
    v11 = [1,2], 
    v12 = [1,2,3,4], 
    v14 = [1], 
    v15 = [1], 
    v17 = [1,2,3], 
    v18 = [1], 
    v20 = [1,2,3,4], 
    v21 = [1], 
    v22 = [1,2,3,4], 
    v23 = [1,2,3], 
    v24 = [1,2,3];


    function buildVol(volName) {
        var option = document.querySelector('option[value=' + volName + ']');
        var volume = eval(volName);
        var header = document.createElement("h2");
        header.innerHTML = option.innerHTML;
        viewer.innerHTML = "";
        viewer.appendChild(header);
        for (let i = 0; i < volume.length; i++) {
            let src = "images/bonusart/chapterart_" + volName + "_" + volume[i] + ".png";
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