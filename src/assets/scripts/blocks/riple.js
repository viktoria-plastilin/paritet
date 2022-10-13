window.app.initRiple = () => {

    const buttons = document.querySelectorAll('.riple__btn');
    
    if(!buttons) return;

    buttons.forEach((button) =>{
      if(button.classList.contains('riple__btn--opacity')){
        
        button.onmouseover = function(e){
          console.log('riple__btn--opacity');
          //button.classList.remove('js-hidden-before');
          const x = e.pageX - button.offsetLeft;
          const y = e.pageY - button.offsetTop;

          button.style.setProperty('--x', x + 'px');
          button.style.setProperty('--y', y + 'px');

          /* setTimeout(() =>{
            button.classList.add('js-hidden-before');
          }, 2000); */
        }
      } else{
        button.onmousemove = function(e){
          const x = e.pageX - button.offsetLeft;
          const y = e.pageY - button.offsetTop;

          button.style.setProperty('--x', x + 'px');
          button.style.setProperty('--y', y + 'px');
        }
      } 
    })
  
  };
  
window.app.initRiple();