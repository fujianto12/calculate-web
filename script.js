let screen = document.getElementById("screen")
const display = (a) => {
    if (a == 'clear') {
        screen.value = ''
    } else if (a == 'del') {
        screen.value = screen.value.slice(0,-1)
    } else if (a == 'action') {
        try {
            screen.value = eval(screen.value)    
        } catch (error) {
            alert('error')
            screen.value = ''
        }
        
    }
    else{
        screen.value += a
    }
}