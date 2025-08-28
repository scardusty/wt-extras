
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
                                
    var tamakoma2 = [
    ["osamu1", "Osamu Mikumo", 1],
    ["osamu2", "Osamu Mikumo", 22],
    ["yuma1", "Kuga Yuma", 1],
    ["yuma2", "Kuga Yuma", 22],
    ["chika1", "Amatori Chika", 2],
    ["chika2", "Amatori Chika", 22],
    ["usami1", "Usami Shiori", 3],
    ["usami2", "Usami Shiori", 22],
    ["hyuse2", "Hyuse", 20]];

var tamakoma1 = [
    ["konami1", "Konami Kirie", 3],
    ["konami2", "Konami Kirie", 22],
    ["reiji", "kizaki reiji", 3],
    ["karasuma", "Karasuma Kyosuke", 3],
    ["ninomaru", "Ninomaru", 21],
    ["yuri", "Rindou Yuri", 20],
    ["jin", "Jin Yuichi", 2]];

var tachikawa = [
    ["tachikawa", "Tachikawa Kei", 4],
    ["izumi", "izumi kouhei", 4],
    ["yuiga", "yuiga takeru", 16],
    ["kunichika", "kunichika yuu", 8]];

var fuyushima = [
    ["fuyushima", "fuyushima shinji", 9],
    ["touma", "touma isami", 4],
    ["maki", "maki risa", 24]];

var kazama = [
    ["kazama", "kazama souya", 4],
    ["kikuchihara",  "kikuchihara shirou", 4],
    ["utagawa", "utagawa ryou", 4],
    ["mikami", "mikami kaho", 8]];

var kusakabe = [
    ["kusakabe", "kusakabe saki", 24],
    ["midorikawa", "midorikawa shun", 5],
    ["saeki", "saeki ryuuji", 24],
    ["kazuma", "kazuma satomi", 24],
    ["uno", "uno hayato", 24]];

var arashiyama = [
    ["arashiyama1", "arashiyama Jun", 1],
    ["arashiyama2", "arashiyama Jun", 20],
    ["kitora", "kitora ai", 1],
    ["tokieda", "tokieda mitsuru", 1],
    ["satori", "satori ken", 5],
    ["ayatsuji", "ayatsuji haruka", 8]];

var kako = [
    ["kako", "kako nozomi", 11],
    ["kuroe", "kuroe futaba", 11],
    ["kitagawa", "kitagawa mai", 24],
    ["kobayakawa", "kobayakawa an", 25]];

 var miwa = [
    ["miwa", "miwa shuuji", 2],
    ["yoneya", "yoneya yousuke", 2],
    ["narasaka", "narasaka tooru", 2],
    ["kodera", "kodera shohei", 2],
    ["tsukimi", "tsukimi ren", 9]];

var katagiri = [
    ["katagiri", "katagiri takaaki", 25],
    ["yukimaru", "yukimaru ichijou", 25],
    ["amakura", "amakura asumi", 25],
    ["momozono", "momozono touichirou", 25],
    ["yuitsuka", "yuitsuka karin", 20]];

var ninomiya = [
    ["ninomiya", "ninomiya masataka", 13],
    ["inukai", "inukai sumiharu", 13],
    ["tsuji", "tsuji shinnosuke", 13],
    ["hiyami", "hiyami aki", 14],
    ["hatohara", "hatohara mirai", 20]];

var kageura = [
    ["kage", "kageura masato", 13],
    ["ema", "ema yuzuru", 13],
    ["zoe", "kitazoe hiro", 13],
    ["hikari", "nire hikari", 14]];

var azuma = [
    ["azuma", "azuma haruaki", 5],
    ["okudera", "okudera tsuneyuki", 14],
    ["koarai", "koarai noboru", 14],
    ["mako", "hitomi mako", 14]];
    
var suzunari1 = [
    ["kuruma", "kuruma tatsuya", 7],
    ["kou", "murakami kou", 7],
    ["taichi", "betsuyaku taichi", 7],
    ["kon", "kon yuka", 12]];
    
var suwa = [
    ["suwa", "suwa koutarou", 6],
    ["hisato", "sasamori hisato",  6],
    ["tsutsumi", "tsutsumi Daichi", 6],
    ["osano", "osano rui"], 10];
    
var arafune = [
    ["arafune", "arafune tetsuji", 8],
    ["hanzaki", "hanzaki yoshito", 11],
    ["hokari", "hokari atsushi", 11],
    ["kagami", "kagami rin", 11]];
    
var nasu = [
    ["nasu", "nasu rei", 12],
    ["kumagai", "kumagai yuuko", 12],
    ["akane1", "hiura akane", 12],
    ["akane2", "hiura akane", 23],
    ["sayoko", "shiki sayoko", 12]];
    
var kakizaki = [
    ["kakizaki", "kakizaki kuniharu", 16],
    ["tomoe", "tomoe kotarou", 16],
    ["teruya", "teruya fumika", 16],
    ["ui", "ui madoka", 16]];
    
var ouji = [
    ["ouji", "ouji kazuaki", 19],
    ["kurauchi", "kurauchi kazuki", 19],
    ["kashio", "kashio yutaka", 19],
    ["haya", "kittaka haya", 19]];
    
var ikoma = [
    ["ikoma", "ikoma tatsuhito", 18],
    ["mizukami", "mizukami satoshi", 18],
    ["oki", "oki kouji", 18],
    ["kai", "minamisawa kai", 18],
    ["mario", "hosoi maori", 18]];
     
var yuba = [
    ["yuba", "yuba takuma", 21],
    ["obishima", "obishima yukari", 21],
    ["tono", "tonooka kazuta", 21],
    ["nono", "fujimaru nono", 21],
    ["kanda", "kanda tadaomi", 23]];

var katori = [
    ["katori", "katori youko", 17],
    ["miura", "miura yuuta", 17],
    ["wakamura", "wakamura rokuro", 17],
    ["hana", "somei hana", 17]];

var afto = [
    ["mira", "mira", 9],
    ["hyrein", "hyrein", 9],
    ["enedora", "enedora", 7],
    ["viza", "viza", 8],
    ["ranbanein", "ranbanein", 7],
    ["hyuse1", "Hyuse", 8]];

var galapoula = [
    ["gatlin", "gatlin", 15],
    ["koskero", "koskero", 15],
    ["wenso", "Wen So", 15],
    ["reghi", "reghindetz", 15],
    ["rata", "ratarikov", 15],
    ["orkan", "orkan", 23],
    ["yomi", "yomi", 15]];

var borderHQ = [
    ["shinoda", "Shinoda Masafumi", 6],
    ["kido", "Kido Masamune", 10],
    ["netsuki", "Netsuki Eizou", 10],
    ["kinuta", "Kinuta Motokichi", 5],
    ["karasawa", "Karasawa Katsumi", 10],
    ["sawamura",  "Sawamura Kyoko", 6],
    ["raizo", "Terashima Raizo", 17],
    ["enedorad", "Enedorad", 14]];

var tamakoma = [
    //["rindou", "Rindou Takumi"],
    ["raijinmaru", "raijinmaru", 3],
    ["yotaro1", "Rindou Yotaro", 3],
    ["yotaro2", "Rindou Yotaro", 23],
    ["kronin", "Michael Cronin", 20],
    ["ruka", "Shinoda Ruka", 23]];

var srank = [    
    ["amo", "Amo Tsukihiko", 6]];

var crank = [
    ["izuho", "Natsume Izuho", 5],
    ["threeidiots", "Three Idiots"], 5];

var bOther = [
    ["chanosquad", "Chano Makoto & Fujisawa Itsuki", 7],
    ["sakurako", "Taketomi Sakurako", 10]];

var osamom = [
    ["osamom", "Mikumo Kasumi", 10]];

var replica = [
    ["replica", "Replica", 1],
    ["replicasmini", "Mini Replicas", 9]];
    
var irl = [
    ["ashihara", "Ashihara Daisuke", 19],
    ["koma", "Koma", 19]];
    
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
            let src = "images/chibis/" + member[0] + ".png";
            memberReverse = wikifyName(member[1]);
            let wikiURL = "https://worldtriggerwiki.com/wiki/" + memberReverse;
            let wikiLink = document.createElement("a");
            wikiLink.href = wikiURL;
            wikiLink.target= '_blank';
            let img = document.createElement("img");
            let title = document.createElement("h3");
            let volume = document.createElement("span");
            title.classList.add("capitalize");
            wikiLink.innerText = member[1];
            title.appendChild(wikiLink);
            img.src = src;
            volume.classList.add("volume");
            volume.innerText = "volume " + member[2];
            viewer.appendChild(title);
            viewer.appendChild(img);
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