
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildSquad(value);
        });
        console.log(selects[i].value);
    };

    var suwa = ["suwa", 26], mizukami = ["mizukami", 26] , wakamura = ["wakamura", 26];

    function buildSquad(squadName) {
        var option = document.querySelector('option[value=' + squadName + ']');
        var squad = eval(squadName);
        console.log(squad);
        var header = document.createElement("h2");
        viewer.innerHTML = "";
        header.innerHTML = option.innerHTML;
        viewer.appendChild(header);
        let src = "images/awaytestsquads/" + squadName + ".jpg";
        let img = document.createElement("img");
        img.src = src;
        let link = document.createElement("a");
        link.href = src;
        link.target = '_blank';
        let volume = document.createElement("span");
        volume.classList.add("volume");
        volume.innerText = "volume " + squad[1];
        viewer.appendChild(link);
        link.appendChild(img);
        viewer.appendChild(volume);
    };
};