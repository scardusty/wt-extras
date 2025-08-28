
window.onload = function () {
    // let zoomButton = document.getElementById("zoom");
    // zoomButton.classList.add("zoomed-out");
    
    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            // scroll(0, 0);
            jump("viewer");
            buildSquad(value);

        });
        console.log(selects[i].value);
    };


let viewer = document.getElementById("viewer");
let viewerDefault = viewer.innerHTML;
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click',function () { 
    viewer.innerHTML = viewerDefault;
    console.log("reset");
});

// document.getElementById("zoom").classList.toggle("zoom");

                                
let tamakomasecond = [["tamakomasecond", "Tamakoma Second", ["main/tamakomasecond"]], 
    ["osamu", "Osamu Mikumo", ["main/osamu", "main/osamu2", "main/osamu3"]],
    ["yuma", "Kuga Yuma", ["main/yuma", "main/yuma2", "main/yuma3"]],
    ["chika", "Amatori Chika", ["main/chika", "main/chika2", "main/chika3"]],
    ["usami", "Usami Shiori", ["main/usami", "main/usami2"]]];

let jin = [["jin", "Jin Yuichi", ["main/jin", "main/jin2", "main/jin3"]]];

let replica = [["replica", "Replica", ["main/replica", "main/replica2"]]];
    

let tamakomafirst = [
    ["tamakomafirst", "Tamakoma First", ["arank/tamakomafirst"]],
    ["konami1", "Konami Kirie", ["arank/konami", "arank/konami2"]],
    ["reiji", "kizaki reiji", ["arank/reiji", "arank/reiji2"]],
    ["karasuma", "Karasuma Kyosuke", ["arank/karasuma", "arank/karasuma2"]]
];

    let tachikawa = [["tachikawasquad", "Tachikawa Squad", ["arank/tachikawasquad"]],
    ["tachikawa", "Tachikawa Kei", ["arank/tachikawa","arank/tachikawa2"]],
    ["izumi", "izumi kouhei", ["arank/izumi", "arank/izumi2"]],
    ["yuiga", "yuiga takeru", ["arank/yuiga"]],
    ["kunichika", "kunichika yuu", ["arank/kunichika"]]
];

    let fuyushima = [["fuyushimasquad", "Fuyushima Squad", ["arank/fuyushimasquad"]],
    ["fuyushima", "fuyushima shinji", ["arank/fuyushima"]],
    ["touma", "touma isami", ["arank/touma"]],
    ["maki", "maki risa", ["arank/maki"]]
];

    let kazama = [
    ["kazamasquad", "Kazama Squad", ["arank/kazamasquad"]],
    ["kazama", "kazama souya", ["arank/kazama", "arank/kazama2"]],
    ["kikuchihara", "kikuchihara shirou", ["arank/kikuchihara", "arank/kikuchihara2"]],
    ["utagawa", "utagawa ryou", ["arank/utagawa", "arank/utagawa2"]],
    ["mikami", "mikami kaho", ["arank/mikami"]]
];

let kusakabe = [
    ["kusakabesquad", "Kusakabe Squad", ["arank/kusakabesquad", "arank/kusakabe"]],
    ["midorikawa", "midorikawa shun", ["arank/midorikawa", "arank/midorikawa2"]]
    //, ["saeki", "saeki ryuuji", ["arank/"]],
    // ["kazuma", "kazuma satomi", ["arank/"]],
    // ["uno", "uno hayato", ["arank/"]]
];

    let arashiyama = [
    ["arashiyamasquad", "Arashiyama Squad", ["arank/arashiyamasquad"]],
    ["arashiyama", "arashiyama Jun", ["arank/arashiyama", "arank/arashiyama2"]],
    ["kitora", "kitora ai", ["arank/kitora", "arank/kitora2"]],
    ["tokieda", "tokieda mitsuru", ["arank/tokieda"]],
    ["satori", "satori ken", ["arank/satori"]],
    ["ayatsuji", "ayatsuji haruka", ["arank/ayatsuji"]]];

    let kako = [
    ["kakosquad", "Kako Squad", ["arank/kakosquad"]],
    ["kako", "kako nozomi", ["arank/kako"]],
    ["kuroe", "kuroe futaba", ["arank/kuroe"]],
    ["kitagawa", "kitagawa mai & kobayakawa an", ["arank/kitagawa"]]
];

    let miwa = [
    ["miwasquad", "Miwa Squad", ["arank/miwasquad"]],
    ["miwa", "miwa shuuji", ["arank/miwa", "arank/miwa2"]],
    ["yoneya", "yoneya yosuke", ["arank/yoneya", "arank/yoneya"]],
    ["narasaka", "narasaka tooru", ["arank/narasaka", "arank/narasaka2"]],
     ["kodera", "kodera shohei", ["arank/kodera"]],
     ["tsukimi", "tsukimi ren", ["arank/tsukimi"]]
];

    let katagiri = [
    ["katagirisquad", "katagiri Squad", ["arank/katagirisquad"]]
    ];

    let ninomiya = [
    ["ninomiyasquad", "Ninomiya Squad", ["brank/ninomiyasquad"]],
        ["ninomiya", "ninomiya masataka", ["brank/ninomiya", "brank/ninomiya2"]],
        ["inukai", "inukai sumiharu", ["brank/inukai"]],
        ["tsuji", "tsuji shinnosuke", ["brank/tsuji"]],
        ["hiyami", "hiyami aki", ["brank/hiyami"]],
        ["hatohara", "hatohara mirai", ["brank/hatohara"]]];

    let kageura = [
    ["kageurasquad", "kageura Squad", ["brank/kageurasquad"]],
        ["kage", "kageura masato", ["brank/kageura", "brank/kageura2"]],
        ["ema", "ema yuzuru", ["brank/ema", "brank/ema2"]],
        ["zoe", "kitazoe hiro", ["brank/kitazoe"]],
        ["hikari", "nire hikari", ["brank/nire"]]];

    let azuma = [
    ["azumasquad", "azuma Squad", ["brank/azumasquad"]],
        ["azuma", "azuma haruaki", ["brank/azuma", "brank/azuma2"]],
        ["okudera", "okudera tsuneyuki", ["brank/okudera"]],
        ["koarai", "koarai noboru", ["brank/koarai"]],
        ["mako", "hitomi mako", ["brank/hitomi"]]];
    
    let suzunarifirst = [
        ["suzunarifirst", "Suzunari First (Kuruma Squad)", ["brank/suzunarifirst"]],
        ["kuruma", "kuruma tatsuya", ["brank/kuruma", "brank/kuruma2"]],
        ["kou", "murakami kou", ["brank/murakami", "brank/murakami2"]],
        ["taichi", "betsuyaku taichi", ["brank/taichi"]],
        ["kon", "kon yuka", ["brank/kon"]]];
    
    let suwa = [
    ["suwasquad", "Suwa Squad", ["brank/suwasquad"]],
        ["suwa", "suwa koutarou", ["brank/suwa","brank/suwa2"]],
        ["hisato", "sasamori hisato", ["brank/sasamori"]],
        ["tsutsumi", "tsutsumi Daichi", ["brank/tsutsumi"]],
        ["osano", "osano rui"], ["brank/osano"]];
    
    let arafune = [
    ["arafunesquad", "Arafune Squad", ["brank/arafunesquad"]],
        ["arafune", "arafune tetsuji", ["brank/arafune", "brank/arafune2"]],
    ["hanzaki", "hanzaki yoshito", ["brank/hanzaki"]],
    ["hokari", "hokari atsushi", ["brank/hokari"]],
    ["kagami", "kagami rin", ["brank/kagami"]]];
    
    let nasu = [
    ["nasusquad", "Nasu Squad", ["brank/nasusquad"]],
        ["nasu", "nasu rei", ["brank/nasu", "brank/nasu2"]],
        ["kumagai", "kumagai yuuko", ["brank/kumagai"]],
    ["akane1", "hiura akane", ["brank/akane"]],
    ["sayoko", "shiki sayoko", ["brank/sayako"]]];
    
    let kakizaki = [
        ["kakizakisquad", " Kakizaki Squad", ["brank/kakizakisquad", "brank/kakizakisquad2"]]];
    
    let ouji = [
    ["oujisquad", "Ouji Squad", ["brank/oujisquad"]]];
    
    let ikoma = [
    ["ikomasquad", "Ikoma Squad", ["brank/ikomasquad"]]];
     
    let yuba = [
        ["yubasquad", "Yuba Squad", ["brank/yubasquad"]]];

    let katori = [
        ["squad", " Squad", ["brank/katorisquad", "brank/katorisquad2"]]];

    let chano = [
        ["chanosquad", "chano Squad", ["brank/chanosquad", "brank/chanosquad2"]]];
    let ebina = [
        ["ebinasquad", "ebina Squad", ["brank/sakurako", "brank/ebinasquad"]]];
    let hayakawa = [
        ["hayakawasquad", "hayakawa Squad", ["brank/hayakawasquad"]]];
    let mamiya = [
        ["mamiyasquad", "mamiya Squad", ["brank/mamiyasquad"]]];
    let matsuhiro = [
        ["matsuhirosquad", "matsuhiro Squad", ["brank/matsuhirosquad"]]];
    let tokiwa = [
        ["tokiwasquad", "tokiwa Squad", ["brank/tokiwasquad"]]];
    let yoshizato = [
        ["yoshizatosquad", "yoshizato Squad", ["brank/yoshizatosquad"]]];
    let urushima = [
        ["urushimasquad", "urushima Squad", ["brank/urushimasquad"]]];

let afto = [
    ["hyrein", "hyrein", ["neighbors/afto/hyrein"]],
    ["ranbanein", "ranbanein", ["neighbors/afto/ranbanein"]],
    ["enedora", "enedora", ["neighbors/afto/enedora"]],
    ["viza", "viza", ["neighbors/afto/viza"]],
    ["hyuse", "Hyuse", ["neighbors/afto/hyuse"]],
    ["mira", "mira", ["neighbors/afto/mira"]]];

let galapoula = [
    ["galapoula", "Galapoula", ["neighbors/galopoula"]]];

let yumaskiller = [
    ["yumaskiller", "Yuma's Killer", ["neighbors/yumas_killer"]]];

let borderHQ = [
    ["kido", "Kido Masamune", ["higherups/kido"]],
    ["shinoda", "Kido Masafumi", ["higherups/shinoda"]],
    ["rindo", "Rindo Takumi", ["higherups/rindo"]],
    ["netsuki", "Netsuki Eizou", ["higherups/netsuki"]],
    ["kinuta", "Kinuta Motokichi", ["higherups/kinuta"]],
    ["karasawa", "Karasawa Katsumi", ["higherups/karasawa"]],
    ["sawamura", "Sawamura Kyoko", ["higherups/sawamura"]],
    ["raizo", "Terashima Raizo", ["higherups/raizo"]],
    ["yugo", "Kuga Yugo", ["higherups/yugo"]]];

let tamakoma = [
    //["rindou", "Rindou Takumi"],
        ["yotaro1", "Rindou Yotaro", ["other/yotaro"]],
    ["raijinmaru", "raijinmaru", ["other/raijinmaru"]]];

let srank = [    
    ["amo", "Amo Tsukihiko", ["other/amo"]]];

let crank = [
    ["izuho", "Natsume Izuho", ["other/izuho"]],
    ["threeidiots", "Koda Squad", ["other/kodasquad"]]];

    
    function buildSquad (squadName) {
        var option = document.querySelector('option[value=' + squadName + ']');
        var squad = eval(squadName);
        var header = document.createElement("h2");
        let squadWikiURL = "https://worldtriggerwiki.com/wiki/" + option.innerHTML;
        let squadWikiLink = document.createElement("a");
        squadWikiLink.href = squadWikiURL;
        squadWikiLink.target = "_blank";
        squadWikiLink.innerText = option.innerHTML;
        header.appendChild(squadWikiLink);
        viewer.innerHTML = "";
        viewer.appendChild(header);

        
        console.log(squad);
        for (let i = 0; i < squad.length; i++) {
            let member = squad[i]; 
            // BUILD IMAGE LIST

            let imgList = [];
            let memberImgList = member[2];
            for (let x = 0; x < (memberImgList.length); x++) {
                // let src = 
                let img = document.createElement("img");
                img.src = "images/bbf/fullbios/" + memberImgList[x] + ".jpg"; 
                imgList.push(img);
                console.log(img.src);
            }

            // WIKIFY NAME
            let wikiURL;
            let wikiLink = document.createElement("a");
            if (member[1].toLowerCase().indexOf("squad") === -1) {
                memberReverse = wikifyName(member[1]);
                wikiURL = "https://worldtriggerwiki.com/wiki/" + memberReverse; 
            }
            else {
                wikiURL = "https://worldtriggerwiki.com/wiki/" + member[1];
            };
            if (member[1].indexOf("&") === -1) {
                // wikiLink.href="#";
                wikiLink.href = wikiURL;
                wikiLink.target = '_blank';
            } ;

            // BUILD HTML
            let title = document.createElement("h3");
            let volume = document.createElement("span");
            title.classList.add("capitalize");
            wikiLink.innerText = member[1];
            title.appendChild(wikiLink);
            volume.classList.add("volume");
            // volume.innerText = "volume " + member[2];
            volume.innerText = "Source: BBF";
            if (member[1] != header.innerText) {
                viewer.appendChild(title);
            }
            
            for (y = 0;y < imgList.length; y++) {
                viewer.appendChild(imgList[y]);
            }
            viewer.appendChild(volume);
            console.log(squadName);
        };

        function wikifyName (fullName) {
            let bothNames = fullName.split(' ');
            if (bothNames.length > 1) {
                for (var i = 0; i < bothNames.length; i++) {
                    bothNames[i] = bothNames[i].charAt(0).toUpperCase() + bothNames[i].slice(1);
                };
                let wikiName = bothNames[1] + " " + bothNames[0];
                console.log(wikiName);
                return wikiName;
            } else {
                fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
                console.log(fullName);
                return fullName;
            }
        };


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