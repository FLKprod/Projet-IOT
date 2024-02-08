document.getElementById("selectLanguage").value = localStorage.getItem("Language");
function selectLanguage() {
    localStorage.setItem('Language',document.getElementById('selectLanguage').value);
    console.log(localStorage.getItem('Language'))
}

function toggleTeamInfo() {
    var teamInfo = document.getElementById("teamInfo");
    if (teamInfo.style.display === "none") {
        teamInfo.style.display = "block";
    } else {
        teamInfo.style.display = "none";
    }
}