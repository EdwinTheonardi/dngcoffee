const showNavbar = () => {
    const navbar = document.getElementById('navbar');
    const window = document.querySelector('html');

    if(screen.width <= 768){
        if(navbar.classList.contains('active')){
            navbar.classList.remove('active');
            window.classList.remove('overflow-hidden')
            return 0;
        }

        window.classList.add('overflow-hidden');
        navbar.classList.add('active');
    }
}