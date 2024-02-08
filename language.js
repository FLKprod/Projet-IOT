function selectLanguage() {
    localStorage.setItem('Language',document.getElementById('selectLanguage').value);
    console.log(localStorage.getItem('Language'))

}