
window.onload = function () {

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            var value = selects[i].value;
            for (let x = 0; x < selects.length; x++) {
                selects[x].selectedIndex = 0;
            }
            selects[i].value = value;
            buildTrigger(value);
        });
        console.log(selects[i].value);
    };

    var afto = ['bamster','marmod','ilgar','rad','bander','rabbit','rabbit2'];
    var galo = ['idra','dog'];
    var attacker = ['attacker'];
    var sniper = ['sniper'];
    var gunner = ['gunner'];
    var yumabt = ['yumasseals'];


    function buildTrigger(triggerName) {
        var option = document.querySelector('option[value=' + triggerName + ']');
        var trigger = eval(triggerName);
        var header = document.createElement("h2");
        let triggerWikiURL = "https://worldtriggerwiki.com/wiki/" + option.innerHTML;
        let triggerWikiLink = document.createElement("a");
        triggerWikiLink.href = triggerWikiURL;
        triggerWikiLink.target = "_blank";
        triggerWikiLink.innerText = option.innerHTML;
        header.appendChild(triggerWikiLink);
        viewer.innerHTML = "";
        viewer.appendChild(header);
        for (let i = 0; i < trigger.length; i++) {
            let title = document.createElement('h3');
            let wikiName = wikifyName(trigger[i]);
            let wikiURL = "https://worldtriggerwiki.com/wiki/" + wikiName;
            let wikiLink = document.createElement("a");
            wikiLink.href = wikiURL;
            wikiLink.target = '_blank';
            wikiLink.innerText = wikiName;
            title.appendChild(wikiLink);
            let src = "images/triggers/" + trigger[i] + ".png";
            let img = document.createElement("img");
            img.src = src;
            if (wikiName != 'Rabbit2' && option.parentElement.id != 'triggers') {
                viewer.appendChild(title);
            }
            viewer.appendChild(img);
        }

    };

    function wikifyName(soldier) {
            wikiName = soldier.charAt(0).toUpperCase() + soldier.slice(1);
            console.log(wikiName);
            return wikiName;
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