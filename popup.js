var classes = ["spA", "spB", "3A", "3B", "okA", "okB", "4A", "4B"];
var classId = ["69", "70"];

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("marks").addEventListener("click", onMarksClick);
  document.getElementById("substitution").addEventListener("click", onSubstitutionClick);
  document.getElementById("timetable").addEventListener("click", onTimetableClick);
  document.getElementById("moodle").addEventListener("click", onMoodleClick);
  document.getElementById("canteen").addEventListener("click", onCanteenClick);
  document.getElementById("web").addEventListener("click", onWebClick);

    var select = document.getElementById("classSelect");
    classes.forEach(function(object){
        select.add(new Option(object));
    });

    select.addEventListener("change", function changed(){
        // FIXME save current id to a cookie
    });
});

function onMarksClick() {
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz/isas/prubezna-klasifikace.php"});
}

function onSubstitutionClick() {
    var date = new Date();
    // FIXME decide according to current date
    date.setDate(date.getDate() + 1);

    var select = document.getElementById("classSelect");
    var url = "http://www.gymkyjov.cz/isas/suplovani.php?zobraz=tridy-1&suplovani="+classId[select.selectedIndex]+"&rezim=den&datum=" + date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    chrome.tabs.create({ 'url': url});
}

function onTimetableClick() {
    // FIXME load from cookie
    var select = document.getElementById("classSelect");
    var url = "http://www.gymkyjov.cz/isas/rozvrh-hodin.php?zobraz=tridy-1&rozvrh=" + classId[select.selectedIndex];
    chrome.tabs.create({ 'url': url});
}

function onMoodleClick() {
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz/moodle"});
}

function onCanteenClick() {
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz:8082"});
}

function onWebClick() {
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz/"});
}
