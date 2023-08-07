
let menuIcon=document.querySelector('menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrolly;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrolly>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.removve('active');
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrolly>=document.scrollingElement.scrollHeight);

}