let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('.load-more .btn').onclick = () =>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
      show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
  };

