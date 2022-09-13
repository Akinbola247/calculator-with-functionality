let display = document.querySelector('.calculatordisplay');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = " ";
            break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }    
            break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'ERROR!'
                }
                
            break;

                default: display.innerText += e.target.innerText;   
               
        }
    });
});


