import { createNav } from './navigation';
import { createFooter } from './footer';
import createHomepage from './homepage';
import { createMenu } from './menu'; 
import { createContactUs } from './contact'; 

createNav();
createHomepage();
createFooter();

const switchPages = () => {
    const homepageItem = document.querySelector('.homepage');
    const menuItem = document.querySelector('.menu');
    const contactItem = document.querySelector('.contact');    

    homepageItem.addEventListener('click', createHomepage)
    menuItem.addEventListener('click', createMenu)
    contactItem.addEventListener('click', createContactUs);
}

switchPages();

