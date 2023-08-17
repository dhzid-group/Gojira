
const discordDropdowm = document.getElementById("discordDropdown")
let discordDropdownClass = discordDropdowm.classList
const discordDesktop = document.getElementById("discordDesktop")
let discordDesktopClass = discordDesktop.classList

const navCollapse = (x) => {
    if (x.matches) {
        discordDropdownClass.add('hidden')
        discordDesktopClass.remove('hidden')
    } else {
        discordDropdownClass.remove('hidden')
        discordDesktopClass.add('hidden')
    }
}

var media = window.matchMedia("(min-width: 992px)")
media.addEventListener("change", navCollapse(media))