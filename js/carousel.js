// Creating the Class For the Carousel

class Carousel {
    // using the constructor method to take the value that i'll inser inside the recall
    constructor(container, title, subtitle){
        this.container = container;
        this.title = title;
        this.subtitle = subtitle;
    }
}

// Function to format the time

function formatTime(numberofseconds){    
    var zero = '0', time;

    time = new Date(0, 0, 0, 0, 0, numberofseconds, 0);

    hh = time.getHours();
    mm = time.getMinutes();
    ss = time.getSeconds() 

    hh = (zero + hh).slice(-2);
    mm = (zero + mm).slice(-2);
    ss = (zero + ss).slice(-2);

    time = hh + 'h ' + mm + 'm ' + ss + 's ';
    return time; 
}

// Function to scrollHorizontally the Carousel with a drag and scroll functionality

function scrollHorizontally(){

    // Taking the Reference to the container

    const cards_cont = document.querySelectorAll(".scroll")

    // Setting the Variable to see if i'm clicking, taking the value of the x'assets and 
    // then see where are i'm scrolling

    let isDown = false;
    let startX;
    let scrollLeft;

    cards_cont.forEach(el => {
        el.addEventListener('mousedown', (e) => {
            // Setting the Boolean value to true
            isDown = true;
    
            // Adding to the cont the class of active
    
            el.classList.add('active');
    
            // Giving to the variable the value of the mouse X'position minus the number of
            // pixel between the mouse point and corner left 
            
            startX = e.pageX - el.offsetLeft;
    
            // Scrollleft will take the value of the number of pixels the content
    
            scrollLeft = el.scrollLeft;
        })
    });

    cards_cont.forEach(el => {
        el.addEventListener('mouseleave', () => {
            // If mouse leave, we change the boolean value and remove the class
    
            isDown = false;
            el.classList.remove('active');
        })
    });
    
    cards_cont.forEach(el => {
        el.addEventListener('mouseup', () => {
            // If mouse is up, we change the boolean value and remove the class
    
            isDown = false;
            el.classList.remove('active');
        })
    });

    cards_cont.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            // If the mouse is moving, we go further with the function, else we return
    
            if(!isDown) return;
    
            // We block the event to prevent the default behavior
    
            e.preventDefault();
    
            // we give to the var x the value of the value of the mouse X'position minus the number of
            // pixel between the mouse point and corner left 
    
            const x = e.pageX - el.offsetLeft;
    
            // Then we proceed to give to var walk the value of X minus the var startX
            // then multiply them by 3, this is for the pace
    
            const walk = (x - startX) * 3; 
    
            // At last, we set the value of scrollLeft by the operation of the actual value of
            // scrollLeft minus the value of walk
    
            el.scrollLeft = scrollLeft - walk;
        })
    });
}