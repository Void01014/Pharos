window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Burger menu
    menu.onclick = (e) => {
        e.stopPropagation(); // prevent click from bubbling up to window
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    });
    
    //Add to Cart
    const btns = document.getElementById('btns');
    // let cart = [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let fav = JSON.parse(localStorage.getItem('fav')) || [];

    //set the favorites
    const favs = Array.from(document.querySelectorAll('.heart'));
    favs.forEach(element => {
        let card_id = (element.closest('.card').id);
        let found = fav.find(elem =>  elem == element.closest('.card').id);
        let heart_img = element.querySelector("img");

        if(found >= 0){
            heart_img.src = "img/heart(full).png"; 
        }
    })

    btns.addEventListener('click', (event) =>{
        const is_heart = event.target.classList.contains("heart"); 
        const is_add = event.target.classList.contains("add"); 

        if(is_add){
            let found = cart.findIndex(obj => obj.id == event.target.closest('.card').id);
            if(found >= 0){
                cart[found].number+= 1;
            }
            else{
                cart.push({
                    id: event.target.closest('.card').id,
                    number: 1
                });
            }
            localStorage.setItem('cart', JSON.stringify(cart));

        }
        else if(is_heart){
            let heart_img = event.target.querySelector("img");
            let card_id = (event.target.closest('.card').id);

            if(heart_img.src.includes("heart(empty).png")){
                heart_img.src = "img/heart(full).png"; 
                fav.push(event.target.closest('.card').id);
                console.log(fav)
            }
            else{
                heart_img.src = "img/heart(empty).png";
                fav = fav.filter(id => id !== card_id);
                console.log(fav);
            }

            localStorage.setItem('fav', JSON.stringify(fav));
        }
        else{
            // alert()
            return;   
        }

        console.log(cart);
        console.log(fav);


    })


    const filter_btns = document.getElementById('filter_btns');

    filter_btns.addEventListener('click', event => {
        if
    });


    //display cards in my cart


});
