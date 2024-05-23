// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav')
const hamburgerMenu = document.querySelector('#hamburger-menu')
const exitMenu = document.querySelector('#exit-menu')
const inputGroup1 = document.querySelector('.inp1')
const inputGroup2 = document.querySelector('.inp2')
const inputGroup3 = document.querySelector('.inp3')

const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-button')

const searchButton = document.querySelector('#search-button')
document.querySelector('#search-button').onclick = (e) =>{
    searchForm.classList.toggle('active')
    searchBox.focus()
    e.preventDefault();
}


hamburgerMenu.addEventListener( "click", event => {
    navbarNav.classList.toggle('active')
    hamburgerMenu.classList.add('none')
    hamburgerMenu.classList.remove('display-menu')
    exitMenu.classList.remove('none')
    exitMenu.classList.add('display-menu')

}) 
inputGroup1.addEventListener("mouseover", event => {
    inputGroup1.classList.remove('no-click')
})
inputGroup1.addEventListener("mouseout", event => {
    inputGroup1.classList.add('no-click')
})
inputGroup2.addEventListener("mouseover", event => {
    inputGroup2.classList.remove('no-click')
})
inputGroup2.addEventListener("mouseout", event => {
    inputGroup2.classList.add('no-click')
})
inputGroup3.addEventListener("mouseover", event => {
    inputGroup3.classList.remove('no-click')
})
inputGroup3.addEventListener("mouseout", event => {
    inputGroup3.classList.add('no-click')
})
exitMenu.addEventListener( "click", event => {
    navbarNav.classList.toggle('active')
    hamburgerMenu.classList.remove('none')
    hamburgerMenu.classList.add('display-menu')
    exitMenu.classList.remove('display-menu')
    exitMenu.classList.add('none')

}) 

document.addEventListener('click', function (x) {
    if (!hamburgerMenu.contains(x.target) && !navbarNav.contains(x.target)) {
      navbarNav.classList.remove('active');   
      hamburgerMenu.classList.remove('none')
      hamburgerMenu.classList.add('display-menu')
      exitMenu.classList.remove('display-menu')
      exitMenu.classList.add('none')
    }
    if (!searchBox.contains(x.target) && !searchForm.contains(x.target)) {
        searchForm.classList.remove('active');   


    }
    
})
