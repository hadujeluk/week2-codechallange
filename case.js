
function swapCase(text) {

    
    let result = '';

    for (let i = 0; i < text.length; i++) {

        
        switch (text[i]) {

            
            case text[i].toLowerCase():
                result += text[i].toUpperCase();
                break;

            
            case text[i].toUpperCase():
                result += text[i].toLowerCase();
                break;

           
            }

    }

    
    return result;

}


console.log(swapCase('The Quick Brown Fox')); 