let menu = document.querySelector('#menu-bar');
let sidebar = document.querySelector('#sidebar');

menu.oncick = () =>{
    menu.classList.toggle('fa-times');
    sidebar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    sidebar.classList.remove('active');
}