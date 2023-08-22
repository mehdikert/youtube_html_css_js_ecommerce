class sneackers{
  constructor(price , img , name){
    this.price = price ,
     this.img = img ,
     this.name = name
  }
}

const AirForce = new sneackers(119 , '../img/air.png' , "AIR FORCE") ; 
const jordan = new sneackers(149 , '../img/jordan.png' , "JORDAN") ; 
const blazer = new sneackers(109 , '../img/blazer.png' , "BLAZER") ; 
const crater = new sneackers(129 , '../img/crater.png' , "CRATER") ; 
const hippie = new sneackers(99 , '../img/hippie.png' , "HIPPIE") ; 
let img = document.querySelector('.blob-img > img') ; 
let price = document.querySelector('.price') ; 
let name = document.querySelector('.present-sneak > span') ; 
let price2 = document.querySelector('#price') ; 
let name2 = document.querySelector('#product-name') ;

let x ;
function changeItems(arg){
  let img2 = document.querySelector('#product-img'); 
 x = arg ;
  switch(arg){
     case 0 :
      img.setAttribute('src' , '../img/air.png') ; 
      img2.setAttribute('src' , '../img/air.png') ;
      price.textContent = '$ '+ AirForce.price ;
      price2.textContent = '$ '+ AirForce.price ; 
      name.textContent = AirForce.name ; 
      name2.textContent = AirForce.name ;  
     break ;
     
     case 1 :  
      img.setAttribute('src' , '../img/jordan.png') ; 
      img2.setAttribute('src' , '../img/jordan.png') ;
      price.textContent = '$ '+ jordan.price ;  
      price2.textContent = '$ '+ jordan.price ; 
      name.textContent = jordan.name ;
      name2.textContent = jordan.name ; 
     break ;
    
     case 2 : 
     img.setAttribute('src' , '../img/blazer.png') ; 
     img2.setAttribute('src' , '../img/blazer.png') ; 
      price.textContent = '$ '+ blazer.price ; 
      price2.textContent = '$ '+ blazer.price ; 
      name.textContent = blazer.name ;
      name2.textContent = blazer.name ; 
     break ;
    
     case 3 : 
     img.setAttribute('src' , '../img/crater.png') ; 
     img2.setAttribute('src' , '../img/crater.png') ; 
      price.textContent = '$ '+ crater.price ; 
      price2.textContent = '$ '+ crater.price ; 
      name.textContent = crater.name ;
      name2.textContent = crater.name ; 
     break ;
    
     case 4 : 
     img.setAttribute('src' , '../img/hippie.png') ; 
     img2.setAttribute('src' , '../img/hippie.png') ; 
      price.textContent = '$ '+ hippie.price ; 
      price2.textContent = '$ '+ hippie.price ; 
      name.textContent = hippie.name ;
      name2.textContent = hippie.name ; 
     break ;
  } 
}



function changeColor(arg){
  let img2 = document.querySelector('#product-img'); 
  switch(x){
     case 1 :  
     if(arg === 'b'){ 
      img2.setAttribute('src' , '../img/jordan2.png') ;
      }else{
       img2.setAttribute('src' , '../img/jordan.png') ;
      }
     break ;
    
     case 2 : 
     if(arg === 'b'){ 
     img2.setAttribute('src' , '../img/blazer2.png') ;
     }else{
      img2.setAttribute('src' , '../img/blazer.png') ;
     }
     break ;
    
     case 3 : 
     if(arg === 'b'){ 
      img2.setAttribute('src' , '../img/crater2.png') ; 
    }else{
      img2.setAttribute('src' , '../img/crater2.png') ;
      }
     break ;
    
     case 4 : 
     if(arg === 'b'){ 
      img2.setAttribute('src' , '../img/hippie2.png') ; 
    }else{
       img2.setAttribute('src' , '../img/hippie.png') ; 
      }
     break ;
     default:
      img2.setAttribute('src' , '../img/air.png') ; 
     if(arg === 'b'){ 
        img2.setAttribute('src' , '../img/air2.png') ;
        }
        
     break ;
    } 
 

 }


 
 function formDisplay(arg){
   let form = document.getElementById('form-buy') ;
    if( arg ){
      form.removeAttribute('style');
      form.setAttribute('style','visibility : hidden')
    } else {
      form.removeAttribute('style');
      form.setAttribute('style','visibility : visible')  
    }
  }