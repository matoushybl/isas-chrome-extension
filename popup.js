var classes = ["prA", "skA", "teA", "krA", "knA", "1A", "1B", "sxA", "2A", "2B", "spA", "spB", "3A", "3B", "okA", "okB", "4A", "4B"];
var classId = ["95", "90", "85", "83", "79", "96", "97", "74", "91", "92", "69", "70", "86", "87", "66", "67", "81", "82"];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("marks").addEventListener("click", onMarksClick);
    document.getElementById("substitution").addEventListener("click", onSubstitutionClick);
    document.getElementById("timetable").addEventListener("click", onTimetableClick);
    document.getElementById("moodle").addEventListener("click", onMoodleClick);
    document.getElementById("canteen").addEventListener("click", onCanteenClick);
    document.getElementById("web").addEventListener("click", onWebClick);

    var select = document.getElementById("classSelect");
    classes.forEach(function (object) {
        select.add(new Option(object));
    });

    select.addEventListener("change", function changed() {
        document.cookie = "id=" + classId[select.selectedIndex];
        changeErrorVisibility();
    });

    select.value = classes[classId.indexOf(getIdFromCookie(false))];
    changeErrorVisibility();
});

function changeErrorVisibility() {
    var id = getIdFromCookie(false);
    if (id != "") {
        var errorMsg = document.getElementById("error").style.visibility = "hidden";
    }
}

function onMarksClick() {
    chrome.tabs.create({
        'url': "http://www.gymkyjov.cz/isas/prubezna-klasifikace.php"
    });
}

function onSubstitutionClick() {
    var date = new Date();

    if (date.getHours() >= 17 || date.getDay() > 5 || date.getDay() == 0) {
        var toAdd = 0;
        switch (date.getDay()) {
        case 5:
            toAdd = 3;
            break;
        case 6:
            toAdd = 2;
            break;
        default:
            toAdd = 1;
            break;
        }
        date.setDate(date.getDate() + toAdd);
    }

    var url = "http://www.gymkyjov.cz/isas/suplovani.php?zobraz=tridy-1&suplovani=" + getIdFromCookie(true) + "&rezim=den&datum=" + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if (getIdFromCookie(false) != "") {
        chrome.tabs.create({
            'url': url
        });
    }
}

function onTimetableClick() {
    var url = "http://www.gymkyjov.cz/isas/rozvrh-hodin.php?zobraz=tridy-1&rozvrh=" + getIdFromCookie(true);
    if (getIdFromCookie(false) != "") {
        chrome.tabs.create({
            'url': url
        });
    }
}

function onMoodleClick() {
    chrome.tabs.create({
        'url': "http://www.gymkyjov.cz/moodle"
    });
}

function onCanteenClick() {
    chrome.tabs.create({
        'url': "http://www.gymkyjov.cz:8082"
    });
}

function onWebClick() {
    chrome.tabs.create({
        'url': "http://www.gymkyjov.cz/"
    });
}

function getIdFromCookie(showAlert) {
    var arrayOfCookies = document.cookie.split('=');
    if (arrayOfCookies.length < 2) {
        if (showAlert) {
            alert("You have not set a class, please set it.");
        }
        return "";
    }
    return arrayOfCookies[1];
}
