
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildProfile(value);
        });
        console.log(selects[i].value);
    };

    var tamakoma2 = [
        ["osamu1", "Osamu Mikumo"],
        ["osamu2", "Osamu Mikumo"],
        ["yuma1", "Kuga Yuma"],
        ["yuma2", "Kuga Yuma"],
        ["chika1", "Amatori Chika"],
        ["chika2", "Amatori Chika"],
        ["usami1", "Usami Shiori"],
        ["usami2", "Usami Shiori"],
        ["hyuse2", "Hyuse"]];

    var kizaki = [
        ["konami1", "Konami Kirie"],
        ["konami2", "Konami Kirie"],
        ["reiji", "kizaki reiji"],
        ["karasuma", "Karasuma Kyosuke"],
        ["ninomaru", "Ninomaru"],
        ["yuri", "Rindou Yuri"],
        ["jin", "Jin Yuichi"]];

    var tachikawa = [
        ["tachikawa", "Tachikawa Kei"],
        ["izumi", "izumi kouhei"],
        ["yuiga", "yuiga takeru"],
        ["kunichika", "kunichika yuu"]];

    var fuyushima = [
        ["fuyushima", "fuyushima shinji"],
        ["touma", "touma isami"],
        ["maki", "maki risa"]];

    var kazama = [
        ["kazama", "kazama souya"],
        ["kikuchihara", "kikuchihara shirou"],
        ["utagawa", "utagawa ryou"],
        ["mikami", "mikami kaho"]];

    var kusakabe = [
        ["kusakabe", "kusakabe saki"],
        ["midorikawa", "midorikawa shun"],
        ["saeki", "saeki ryuuji"],
        ["kazuma", "kazuma satomi"],
        ["uno", "uno hayato"]];

    var arashiyama = [
        ["arashiyama1", "arashiyama Jun"],
        ["arashiyama2", "arashiyama Jun"],
        ["kitora", "kitora ai"],
        ["tokieda", "tokieda mitsuru"],
        ["satori", "satori ken"],
        ["ayatsuji", "ayatsuji haruka"]];

    var kako = [
        ["kako", "kako nozomi"],
        ["kuroe", "kuroe futaba"],
        ["kitagawa", "kitagawa mai"],
        ["kobayakawa", "kobayakawa an"]];

    var miwa = [
        ["miwa", "miwa shuuji"],
        ["yoneya", "yoneya yousuke"],
        ["narasaka", "narasaka tooru"],
        ["kodera", "kodera shohei"],
        ["tsukimi", "tsukimi ren"]];

    var katagiri = [
        ["katagiri", "katagiri takaaki"],
        ["yukimaru", "yukimaru ichijou"],
        ["amakura", "amakura asumi"],
        ["momozono", "momozono touichirou"],
        ["yuitsuka", "yuitsuka karin"]];

    var ninomiya = [
        ["ninomiya", "ninomiya masataka"],
        ["inukai", "inukai sumiharu"],
        ["tsuji", "tsuji shinnosuke"],
        ["hiyami", "hiyami aki"],
        ["hatohara", "hatohara mirai"]];

    var kageura = [
        ["kage", "kageura masato"],
        ["ema", "ema yuzuru"],
        ["zoe", "kitazoe hiro"],
        ["hikari", "nire hikari"]];

    var azuma = [
        ["azuma", "azuma haruaki"],
        ["okudera", "okudera tsuneyuki"],
        ["koarai", "koarai noboru"],
        ["mako", "hitomi mako"]];

    var kuruma = [
        ["kuruma", "kuruma tatsuya"],
        ["kou", "murakami kou"],
        ["taichi", "betsuyaku taichi"],
        ["kon", "kon yuka"]];

    var suwa = [
        ["suwa", "suwa koutarou"],
        ["hisato", "sasamori hisato"],
        ["tsutsumi", "tsutsumi Daiichi"],
        ["osano", "osano rui"]];

    var arafune = [
        ["arafune", "arafune tetsuji"],
        ["hanzaki", "hanzaki yoshito"],
        ["hokari", "hokari atsushi"],
        ["kagami", "kagami rin"]];

    var nasu = [
        ["nasu", "nasu rei"],
        ["kumagai", "kumagai yuuko"],
        ["akane1", "hiura akane"],
        ["akane2", "hiura akane"],
        ["sayoko", "shiki sayoko"]];

    var kakizaki = [
        ["kakizaki", "kakizaki kuniharu"],
        ["tomoe", "tomoe kotarou"],
        ["teruya", "teruya fumika"],
        ["ui", "ui madoka"]];

    var ouji = [
        ["ouji", "ouji kazuaki"],
        ["kurauchi", "kurauchi kazuki"],
        ["kashio", "kashio yutaka"],
        ["haya", "kittaka haya"]];

    var ikoma = [
        ["ikoma", "ikoma tatsuhito"],
        ["mizukami", "mizukami satoshi"],
        ["oki", "oki kouji"],
        ["kai", "minamisawa kai"],
        ["mario", "hosoi maori"]];

    var yuba = [
        ["yuba", "yuba takuma"],
        ["obishima", "obishima yukari"],
        ["tono", "tonooka kazuta"],
        ["nono", "fujimaru nono"],
        ["kanda", "kanda tadaomi"]];

    var katori = [
        ["katori", "katori youko"],
        ["miura", "miura yuuta"],
        ["wakamura", "wakamura rokuro"],
        ["hana", "somei hana"]];

    var afto = [
        ["mira", "mira"],
        ["hyrein", "hyrein"],
        ["enedora", "enedora"],
        ["viza", "viza"],
        ["ranbanein", "ranbanein"],
        ["hyuse1", "Hyuse"]];

    var galapoula = [
        ["gatlin", "gatlin"],
        ["koskero", "koskero"],
        ["wenso", "Wen So"],
        ["reghi", "reghindetz"],
        ["rata", "ratarikov"],
        ["orkan", "orkan"],
        ["yomi", "yomi"]];

    var borderHQ = [
        ["shinoda", "Shinoda Masafumi"],
        ["kido", "Kido Masamune"],
        ["netsuki", "Netsuki Eizou"],
        ["kinuta", "Kinuta Motokichi"],
        ["karasawa", "Karasawa Katsumi"],
        ["sawamura", "Sawamura Kyoko"],
        ["raizo", "Terashima Raizo"],
        ["enedorad", "Enedorad"]];

    var tamakoma = [
        //["rindou", "Rindou Takumi"],
        ["raijinmaru", "raijinmaru"],
        ["yotaro1", "Rindou Yotaro"],
        ["yotaro2", "Rindou Yotaro"],
        ["kronin", "Michael Cronin"],
        ["ruka", "Shinoda Ruka"]];

    var srank = [
        ["amo", "Amo Tsukihiko"]];

    var crank = [
        ["izuho", "Izuho Natsume"],
        ["threeidiots", "The Three Idiots"]];

    var bOther = [
        ["chanosquad", "Chano Makoto & Fujisawa Itsuki"],
        ["sakurako", "Taketomi Sakurako"]];

    var osamom = [
        ["osamom", "Mikumo Kasumi"]];

    var replica = [
        ["replica", "Replica"],
        ["replicasmini", "Mini Replicas"]];

    var irl = [
        ["ashihara", "Ashihara Daisuke"],
        ["koma", "Koma"]];

    var urushima;
    var seniorofficers;
    var seniorofficers2;
    var chano;
    var away;

    function buildProfile(squadName) {
        var option = document.querySelector('option[value=' + squadName + ']');
        var squad = eval(squadName);
        var header = document.createElement("h2");
        let squadWikiURL = "https://worldtriggerwiki.com/wiki/" + option.innerHTML;
        let squadWikiLink = document.createElement("a");
        squadWikiLink.href = squadWikiURL;
        squadWikiLink.target = "_blank";
        squadWikiLink.innerText = option.innerHTML;
        if (squadName != 'seniorofficers' && squadName != 'seniorofficers2' && squadName != 'away') {
        header.appendChild(squadWikiLink);
        } else {
            header.innerHTML = option.innerHTML;
        }
        viewer.innerHTML = "";
        viewer.appendChild(header);
        console.log(squad);
        let src = "images/squadprofiles/" + squadName + "squad.png";
        let img = document.createElement("img");
        img.src = src;
        viewer.appendChild(img);
        console.log(squadName);

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