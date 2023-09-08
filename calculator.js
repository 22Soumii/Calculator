let string="";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){  // This function evaluates the expression and returns the result
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='AC'){ // This function clears all the values
        string=" ";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='C'){   // This function clear values from the rightside one by one  
        string=string.slice(0,-1);
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target)              // This function displays the values
    string=string + e.target.innerHTML;
    document.querySelector('input').value=string;
    }
});
});

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 130
  });
  
  ScrollReveal().reveal(' .heading, .container', { origin: 'left' });
