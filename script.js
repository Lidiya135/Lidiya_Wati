// section aktif---------
let pages =document.querySelectorAll('section');
// console.log(pages);
let navLinks =document.querySelectorAll('header nav a');
// console.log(navLinks);

window.onscroll = () => {
    pages.forEach(page => {
        let top = window.scrollY;
        // console.log(top)
        let offset = page.offsetTop - 150;
        // console.log(offset)
        let height = page.offsetHeight;
        // console.log(height)
        let id = page.getAttribute('id');
        // console.log(id)

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    //nav sticky-------
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

// delete menu when klik section----
menu.classList.remove('bx-x');
nav.classList.remove('active');
}


// menu icon responsive---------------
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
