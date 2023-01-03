const createHomepage = () => {
    const content = document.querySelector('#content');
    content.replaceChildren();
    const contentDesc = document.createElement('div');
    contentDesc.classList.add('content-body');
    content.appendChild(contentDesc);
    
    const aboutUsDesc = createInspirationSection()
    const aboutUsSection = document.createElement('div');
    aboutUsSection.classList.add('about-us');
    aboutUsSection.innerHTML = aboutUsDesc.innerHTML;
    contentDesc.appendChild(aboutUsSection);

    const serviceDesc = createServiceSection();
    const serviceSection = document.createElement('div');
    serviceSection.classList.add('service');
    serviceSection.innerHTML = serviceDesc.innerHTML;
    contentDesc.appendChild(serviceSection);

    const findUsDesc = createFindUsSection();
    const findUsSection = document.createElement('div');
    findUsSection.classList.add('find-us');
    findUsSection.innerHTML = findUsDesc.innerHTML;
    contentDesc.appendChild(findUsSection);

    const openHours = createOpenHours();
    const openHoursSection = document.createElement('div');
    openHoursSection.classList.add('hours');
    openHoursSection.innerHTML = openHours.innerHTML;
    contentDesc.appendChild(openHoursSection);
}

const createInspirationSection = () => {
    const aboutUs = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'OUR INSPIRATION';
    const inspirationText = document.createElement('p');
    inspirationText.classList.add('inspiration');
    inspirationText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac massa auctor, rhoncus purus eu, rutrum elit. Mauris tellus eros, mollis eu nulla ut, rutrum maximus sapien. Duis id aliquet magna. Phasellus eget ipsum at augue volutpat tempus. Nam iaculis diam vel nibh facilisis, ut porttitor nunc consectetur. Cras non velit mauris. Aliquam facilisis fermentum enim quis suscipit. Proin ornare sit amet tortor id ultricies. Mauris vel efficitur neque. Vivamus et dapibus ipsum, vel egestas nisi. Aliquam erat volutpat.';
    const horizontalLine = document.createElement('hr');
    aboutUs.appendChild(h2);
    aboutUs.appendChild(inspirationText);
    aboutUs.appendChild(horizontalLine);
    return aboutUs;
}

const createServiceSection = () => {
    const service = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'WHAT WE DO';
    const serviceText = document.createElement('p');
    serviceText.classList.add('mission-desc');
    serviceText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac massa auctor, rhoncus purus eu, rutrum elit. Mauris tellus eros, mollis eu nulla ut, rutrum maximus sapien. Duis id aliquet magna. Phasellus eget ipsum at augue volutpat tempus. Nam iaculis diam vel nibh facilisis, ut porttitor nunc consectetur. Cras non velit mauris. Aliquam facilisis fermentum enim quis suscipit. Proin ornare sit amet tortor id ultricies. Mauris vel efficitur neque. Vivamus et dapibus ipsum, vel egestas nisi. Aliquam erat volutpat.';
    const horizontalLine = document.createElement('hr');
    service.appendChild(h2);
    service.appendChild(serviceText);
    service.appendChild(horizontalLine);
    return service;
}

const createFindUsSection = () => {
    const findUs = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'WHERE YOU CAN FIND US';
    const findUsText = document.createElement('p');
    findUsText.classList.add('address');
    findUsText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac massa auctor, rhoncus purus eu, rutrum elit. Mauris tellus eros, mollis eu nulla ut, rutrum maximus sapien. Duis id aliquet magna. Phasellus eget ipsum at augue volutpat tempus. Nam iaculis diam vel nibh facilisis, ut porttitor nunc consectetur. Cras non velit mauris. Aliquam facilisis fermentum enim quis suscipit. Proin ornare sit amet tortor id ultricies. Mauris vel efficitur neque. Vivamus et dapibus ipsum, vel egestas nisi. Aliquam erat volutpat.';
    const horizontalLine = document.createElement('hr');
    findUs.appendChild(h2);
    findUs.appendChild(findUsText);
    findUs.appendChild(horizontalLine);
    return findUs;
}

const createOpenHours = () => {
    const hoursWrapper = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'HOURS';
    hoursWrapper.appendChild(h2);
    const hoursList = document.createElement('ul');
    hoursList.classList.add('open-hours');
    hoursList.innerHTML = ` <li class="day">Monday 8:00-20.00</li>
                            <li class="day">Tuesday 8:00-20.00</li>
                            <li class="day">Wednesday 8:00-20.00</li>
                            <li class="day">Thursday 8:00-20.00</li>
                            <li class="day">Friday 8:00-20.00</li>
                            <li class="day">Saturday 8:00-20.00</li>
                            <li class="day">Sunday 8:00-20.00</li>`
    hoursWrapper.appendChild(hoursList);
    return hoursWrapper;
}

export default createHomepage;