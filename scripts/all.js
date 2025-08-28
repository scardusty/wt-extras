window.addEventListener('load',() => {

    let topNav = document.getElementById("topNav");
    topNav.innerHTML = `<li class="navtitle"><a href="index.html"><span> Extras</span></a></li>
                <li><a href="chibis.html">Chibis</a></li>
                <li><a href="squadrooms.html">Squad Rooms</a></li>
                <li><a href="charts.html">Charts</a></li>
                <li><a href="vday.html">Popularity Polls</a></li>
                <li><a href="bbfprofiles.html">Databook Profiles</a></li>
                <li class="more"><a href="#">More</a>
                    <ul>
                        <li><a href="locations.html">Locations</a></li>
                        <li><a href="squadprofiles.html">Squad Profiles</a></li>
                        <li><a href="awaytestsquads.html">Away Test Squad Profiles</a></li>
                        <li><a href="bonusart.html">Bonus Art</a></li>
                        <li><a href="triggers.html">Triggers</a></li>
                        <li><a href="minicomics.html">Mini-comics</a></li>
                    </ul>
                </li>`;

    let navigation = [
        ["chibis.html", "Chibi Profiles", "./images/chibis/yuma1.png", true],
        ["squadprofiles.html", "Squad Profiles", "./images/squadprofiles/nasusquad.png", true],
        ["squadrooms.html", "Squad Rooms", "./images/squadrooms/azuma.jpeg", true],
        ["bbfprofiles.html", "Databook Profiles", "./images/bbf/fullbios/brank/arafune.jpg", true],
        ["awaytestsquads.html", "Away Test Squad Profiles", "./images/awaytestsquads/suwa.jpg", true],
        ["charts.html", "Charts", "./images/charts/academics.png", true],
        ["vday.html", "V-Day & Popularity Polls", "./images/vday/pop1-3.png", true],
        ["triggers.html", "Triggers & Trion Soldiers", "./images/triggers/bamster.png", true],
        ["locations.html", "Mikado City Locations", "./images/locations/rokueikanhs.png", true],
        ["bonusart.html", "Bonus Chapter Art", "./images/bonusart/chapterart_v24_3.png", true],
        ["minicomics.html", "Mini-Comics", "./images/4komas/spaghetti2.png", true],
        ["https://worldtriggerwiki.com/wiki/Question_Corner", "Q&As (WT Wiki)&#10138;", "./images/qnaexample.png", false]
        ]
    ;

    let navBox = document.querySelector("#more-extras .previews");
    navBox.innerHTML = "";

    for (let i = 0; i < navigation.length; i++) {
        console.log(window.location.pathname);
        let pathname = window.location.pathname;
        let url = "/" + navigation[i][0];
        console.log(url);
        // if (window.location.pathname url) {

        if (pathname.toLowerCase().indexOf(url) === -1) {
            let title = navigation[i][1];

            //image element
            let image = document.createElement("img");
            image.src = navigation[i][2];
            image.alt = title; 
            //console.log(url + " " + title + " " + image.outerHTML);
            
            //a element
            let linkItem = document.createElement("li");
            var link = document.createElement("a");
            //for external links
            if (navigation[i][3] == false) {
                link.target = "_blank"; 
                link.href = navigation[i][0];
            }
            else {
                link.href = "." + url;
            }
            
            //span element
            let span = document.createElement("span");
            span.innerHTML = title;

            link.append(image, span)
            linkItem.appendChild(link);

            navBox.appendChild(linkItem);

        }
    }

    //console.log(navigation);

    // Zoom out/zoom in 
    setZoom();
    
});

function setZoom() {
    let btn = document.createElement("a");
    let viewer = document.getElementById("viewer");
    btn.id = "zoom";
    if (viewer.classList.contains("zoomed-out")) {
        btn.innerText = "Full Size";
    } else {
        btn.innerText = "Fit to Screen";
    }
    dropdowns = document.querySelector("form");
    dropdowns.insertBefore(btn, document.querySelector("#reset"));
    btn.addEventListener('click', function () {
        zoom(btn)});
}

function zoom(object) {
    let btn = object;
    let viewer = document.getElementById("viewer");
    console.log('zoom>');
    btn.classList.toggle('zoomed-out');
    viewer.classList.toggle('zoomed-out');
    if (viewer.classList.contains("zoomed-out")) {
        btn.innerText = "Full Size";
    } else {
        btn.innerText = "Fit to Screen";
    }
}

function jump(h) {
    var url = location.href;               //Save down the URL without hash.
    location.href = "#" + h;                 //Go to the target element.
    history.replaceState(null, null, url);   //Don't like hashes. Changing it back.
}