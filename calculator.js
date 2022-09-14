let display = document.querySelector('.calculatordisplay');
let display2 = document.querySelector('.calculatordisplayleft')
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = " ";
                display2.innerText = " ";
            break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    display2.innerText = display.innerText.slice(0,-1);
                }    
            break;
            case "=":
                display2.innerText= display.innerText;
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


