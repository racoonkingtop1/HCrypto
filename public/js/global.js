let accIcon = document.querySelector(`.acc_icon`);
let accMenu = document.querySelector(`.acc_menu`);



document.addEventListener(`click`, function(evt){
    if (!(accMenu.classList.contains(`h0`)) && evt.target != accMenu && evt.target != accMenu){
        accMenu.classList.add(`h0`)
    } else if (accMenu.classList.contains(`h0`) && evt.target == accIcon) {
        accMenu.classList.toggle(`h0`)
    }
});