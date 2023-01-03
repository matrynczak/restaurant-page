import createHomepage from './homepage';

export const createNav = () => {
    const navigation = document.querySelector('nav');
    const logo = document.createElement('img');
    logo.setAttribute('src', '../images/kebab-logo.jpeg');
    navigation.appendChild(logo);
    const items = document.createElement('ul');
    navigation.appendChild(items);
    for(let i=0; i<3; i++) {
        const navItem = document.createElement('li');
        items.appendChild(navItem);
    }
    const navItem_1 = document.querySelector('li:nth-child(1)');
    const linkHomepage = document.createElement('a');
    linkHomepage.setAttribute('href', '#')
    navItem_1.classList.add('homepage');
    navItem_1.classList.add('tab-clicked')
    linkHomepage.textContent = 'Homepage';
    navItem_1.appendChild(linkHomepage);

    const navItem_2 = document.querySelector('li:nth-child(2)');
    const linkMenu = document.createElement('a');
    linkMenu.setAttribute('href', '#')
    navItem_2.classList.add('menu');
    linkMenu.textContent = 'Menu';
    navItem_2.appendChild(linkMenu);

    const navItem_3 = document.querySelector('li:nth-child(3)');
    const linkContact = document.createElement('a');
    linkContact.setAttribute('href', '#')
    navItem_3.classList.add('contact');
    linkContact.textContent = 'Contact Us';
    navItem_3.appendChild(linkContact);

    const allItems = document.querySelectorAll('nav li');
    allItems.forEach(item => 
        item.addEventListener('click', () => {
            for(let i=0; i<allItems.length; i++){
                if(allItems[i].classList.contains('tab-clicked')){
                    allItems[i].classList.remove('tab-clicked');
                }
            }
            item.classList.add('tab-clicked');
        }
    ));

    const logoIcon = document.querySelector('.header img');
    const homepageTab = document.querySelector('.homepage');
    logoIcon.addEventListener('click', () => {
        for(let i=0; i<allItems.length; i++){
            if(allItems[i].classList.contains('tab-clicked')){
                allItems[i].classList.remove('tab-clicked');
            }
        }
        homepageTab.classList.add('tab-clicked');
            
        createHomepage();  
    });
    
}
