class Carousel {
    constructor(carouselItem){
        this.carouselItem = carouselItem;

        const lbutton = document.querySelector('.carousel .left-button');
        const rbutton = document.querySelector('.carousel .right-button');
        this.lbutton = lbutton;
        this.rbutton = rbutton; 
        
        const images = document.querySelectorAll('.carousel img');

        let dataIndex = 1;

        for(let i = 0; i < images.length; i++){
            images[i].setAttribute('data-index', dataIndex); 
            images[i].setAttribute('current','false');       
            dataIndex++
        }
        let imageArray = Array.from(images);
        let index = 0; 

        imageArray[index].style.display = 'flex';
        imageArray[index].setAttribute('current', 'true');
             

        this.lbutton.addEventListener('click', () => this.images(false,index));

        this.rbutton.addEventListener('click', () => this.images(true,index));
    }

    images(direction, index){

        const images = document.querySelectorAll('.carousel img');
        this.images = images;

        let imageArray = Array.from(this.images);

        let currentImage = document.querySelector('[current="true"]').dataset.index;

        if(direction == true){
            let image = document.querySelector(`[data-index="${currentImage}"]`);
            
            imageArray[index].setAttribute('current', 'false');
            image.style.display = "none";
            imageArray[index++].style.display = "flex";
            imageArray[index].setAttribute('current', 'true');

        }



    }

    
}

let carousel = document.querySelectorAll('.carousel').forEach(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/