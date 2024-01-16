/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const header = document.querySelector("header");
    if (scroll > 350) {
       header.classList.add("afterscroll");
       header.classList.remove(".nav.container");
    } else {
       header.classList.add(".nav.container");
       header.classList.remove("afterscroll");
    }
 });
 