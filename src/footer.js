export const createFooter = () => {
    const footer = document.querySelector('footer');
    const author = document.createElement('p');
    author.textContent = 'Designed and implemented by MR |';
    const date = document.createElement('p');
    date.textContent = '2022/2023'
    const imagesNote = document.createElement('p');
    imagesNote.classList.add('ownership-note');
    imagesNote.textContent = 'All of the images + map are taken from the Internet. Nothing is my ownership.';
    footer.appendChild(author);
    footer.appendChild(date);
    footer.appendChild(imagesNote);
}
