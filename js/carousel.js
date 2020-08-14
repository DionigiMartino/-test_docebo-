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

    const cards_cont = document.querySelector(".cards_container")

    // Setting the Variable to see if i'm clicking, taking the value of the x'assets and 
    // then see where are i'm scrolling

    let isDown = false;
    let startX;
    let scrollLeft;

    cards_cont.addEventListener('mousedown', (e) => {
        // Setting the Boolean value to true
        isDown = true;

        // Adding to the cont the class of active

        cards_cont.classList.add('active');

        // Giving to the variable the value of the mouse X'position minus the number of
        // pixel between the mouse point and corner left 
        
        startX = e.pageX - cards_cont.offsetLeft;

        // Scrollleft will take the value of the number of pixels the content

        scrollLeft = cards_cont.scrollLeft;
    });

    cards_cont.addEventListener('mouseleave', () => {
        // If mouse leave, we change the boolean value and remove the class

        isDown = false;
        cards_cont.classList.remove('active');
    });
    
    cards_cont.addEventListener('mouseup', () => {
        // If mouse is up, we change the boolean value and remove the class

        isDown = false;
        cards_cont.classList.remove('active');
    });

    cards_cont.addEventListener('mousemove', (e) => {
        // If the mouse is moving, we go further with the function, else we return

        if(!isDown) return;

        // We block the event to prevent the default behavior

        e.preventDefault();

        // we give to the var x the value of the value of the mouse X'position minus the number of
        // pixel between the mouse point and corner left 

        const x = e.pageX - cards_cont.offsetLeft;

        // Then we proceed to give to var walk the value of X minus the var startX
        // then multiply them by 3, this is for the pace

        const walk = (x - startX) * 3; 

        // At last, we set the value of scrollLeft by the operation of the actual value of
        // scrollLeft minus the value of walk

        cards_cont.scrollLeft = scrollLeft - walk;
    });
    
    const cards_cont2 = document.querySelector(".cards_container2")

    cards_cont2.addEventListener('mousedown', (e) => {
        isDown = true;
        cards_cont2.classList.add('active');
        startX = e.pageX - cards_cont2.offsetLeft;
        scrollLeft = cards_cont2.scrollLeft;
    });

    cards_cont2.addEventListener('mouseleave', () => {
        isDown = false;
        cards_cont2.classList.remove('active');
    });
    cards_cont2.addEventListener('mouseup', () => {
        isDown = false;
        cards_cont2.classList.remove('active');
    });

    cards_cont2.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - cards_cont2.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        cards_cont2.scrollLeft = scrollLeft - walk;
    });
}