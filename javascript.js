let burger = document.querySelector('.burger')
let burgerBtn = document.querySelector('.burger_btn')
let popup = ()=>{
    burger.classList.toggle('active')
    burgerBtn.classList.toggle('active')
}

let search_form = document.querySelector('.search_form')
let search_pop = ()=>{
    search_form.classList.toggle('search_active')
}