export const createContactUs = () => {
    const content = document.querySelector('#content');
    content.replaceChildren();
    
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    const title = document.createElement('h2');
    const restaurantName = document.createElement('h4');
    const firstLineAddress = document.createElement('p');
    const secondLineAddress = document.createElement('p');
    const phoneNum = document.createElement('p');
    const mail = document.createElement('p');
    const map = document.createElement('div');

    title.textContent = 'CONTACT US!';
    restaurantName.textContent = 'DUMMY RESTAURANT';
    firstLineAddress.textContent = 'Unknown Street 34/1';
    secondLineAddress.textContent = 'No-existing city 123654';
    phoneNum.textContent = 'PHONE: 111 222 333 444';
    mail.textContent = 'EMAIL: non-existing-email@email-non-existing.com';
    map.innerHTML = 
                    `<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=krak%C3%B3w,%20rynek%20g%C5%82owny+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
                    </iframe>`

    contactWrapper.appendChild(title);
    contactWrapper.appendChild(restaurantName);
    contactWrapper.appendChild(firstLineAddress);
    contactWrapper.appendChild(secondLineAddress);
    contactWrapper.appendChild(phoneNum);
    contactWrapper.appendChild(mail);
    contactWrapper.appendChild(map);

    content.appendChild(contactWrapper);
}