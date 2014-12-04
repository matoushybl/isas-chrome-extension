document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("marks").addEventListener("click", onMarksClick);
  document.getElementById("substitution").addEventListener("click", onSubstitutionClick);
  document.getElementById("timetable").addEventListener("click", onTimetableClick);
  document.getElementById("moodle").addEventListener("click", onMoodleClick);
  document.getElementById("canteen").addEventListener("click", onCanteenClick);
  document.getElementById("web").addEventListener("click", onWebClick);
});

function onMarksClick() {
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz/isas/prubezna-klasifikace.php"});
}

function onSubstitutionClick() {
    var date = new Date();
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz/isas/prubezna-klasifikace.php"});
}

function onTimetableClick() {
    chrome.tabs.create({ 'url': "http://www.gymkyjov.cz/isas/prubezna-klasifikace.php"});
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
