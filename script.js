let pages =document.querySelectorAll(['section', 'footer']);
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
}