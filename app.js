const toggler=document.getElementById('moon')
// const body1=document.getElementsById('body')
// const nav=document.getElementById('nav-bar')
// const container=document.getElementById('container')




toggler.addEventListener('click',()=>{
    toggler.style.color='white'
    // document.body.style.backgroundColor='#2c4e35'
    // nav.style.backgroundColor='#2c4e35'
    // container.style.backgroundColor='red'
    // document.body.style.backgroundColor='#2c4e35'


if(toggler.checked=== true){
       document.body.style.backgroundColor='black'
    }else{
         document.body.style.backgroundColor='white'

    }




    // toggler.checked === true
    // ? (document.body.style.backgroundColor = "blue")
    // : (document.body.style.backgroundColor = "white");


})