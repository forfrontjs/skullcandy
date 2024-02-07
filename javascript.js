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

let korzina_from = document.querySelector('.korzina_from')
const body = document.querySelector("body")
let korzina_pop = ()=>{
    korzina_from.classList.toggle('korzina_active')
    body.classList.toggle('lock')
}