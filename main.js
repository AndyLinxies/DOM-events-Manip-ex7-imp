//Ex1
let ex1 = document.getElementById('content')
let p = document.querySelector('p')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
function test(e) {
    //console.log(e.target);
    if (e.target==ex1) {
        e.target.style.border = '2px solid'
    }else if (e.target== p){
        e.target.style.fontWeight ='bolder'
        e.target.style.color = 'red'
    }else if (e.target==h1){
        e.target.style.backgroundColor = 'yellow'
    }else if (e.target==h2){
        e.target.innerText=e.target.innerText.slice(0,-1)
    }
}
ex1.addEventListener('click', test)

//Ex2
let sec = document.querySelector('section')
let p2 = document.querySelector('section p')

let variable = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"


sec.style.height = '200px'
sec.addEventListener('mouseover',()=>{

p2.innerText = variable
});

