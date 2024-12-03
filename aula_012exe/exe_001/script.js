
function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let data = new Date()
    let hora = data.getHours()
    
    let background = document.querySelector('body')
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12){
        img.src = 'manha.jpg'
        background.style.background = 'yellow';
        background.style.color = 'springgreen';

        
    } else if (hora < 18){
        img.src = 'tarde.jpg'
        background.style.background = 'red';
        background.style.color = 'white';
            
         

    } else {
        img.src = 'noite.jpg'
                
    }
    

}