export const createMenu = () => {
    const content = document.querySelector('#content');
    content.replaceChildren();
    const menu = document.createElement('div');
    menu.classList.add('menu-wrapper');

    const appetizers = document.createElement('div');
    appetizers.classList.add('appetizers-wrapper');
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = 'APPETIZERS';
    appetizers.appendChild(appetizersTitle);
    menu.appendChild(appetizers);
    const appetizersList = document.createElement('ul');
    appetizersList.classList.add('appetizers-list');
    appetizersList.innerHTML = ` 
                    <li class="appetizer">Sandwich with cheese
                        <img src="../images/sandwich.jpg" alt="The image of sandwich" width="300" height="300">
                    </li>
                    <li class="appetizer">Vegatables salad
                        <img src="../images/vegetables-salad.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>
                    <li class="appetizer">Garlic pita bread
                        <img src="../images/garlic-pita-bread.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>`
    appetizers.appendChild(appetizersList);

    const mainDishes = document.createElement('div');
    mainDishes.classList.add('main-dishes-wrapper');
    const mainDishesTitle = document.createElement('h2');
    mainDishesTitle.textContent = 'MAIN DISHES';
    mainDishes.appendChild(mainDishesTitle);
    menu.appendChild(mainDishes);
    const mainDishesList = document.createElement('ul');
    mainDishesList.classList.add('main-dishes-list');
    mainDishesList.innerHTML = ` 
                    <li class="main-dish">Kebab on the plate
                        <img src="../images/kebab-plate.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>
                    <li class="main-dish">Tomato soup
                        <img src="../images/tomato-soup.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>
                    <li class="main-dish">Chicken cutlet with fries
                        <img src="../images/chicken-cutlet.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>`
    mainDishes.appendChild(mainDishesList);

    const drinks = document.createElement('div');
    drinks.classList.add('drinks-wrapper');
    const drinksTitle = document.createElement('h2');
    drinksTitle.textContent = 'DRINKS';
    drinks.appendChild(drinksTitle);
    menu.appendChild(drinks);
    const drinksList = document.createElement('ul');
    drinksList.classList.add('drinks-list');
    drinksList.innerHTML = ` 
                    <li class="drink">Tea
                        <img src="../images/tea.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>
                    <li class="drink">Coffee
                        <img src="../images/coffee.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>
                    <li class="drink">Beer
                        <img src="../images/beer.jpeg" alt="The image of sandwich" width="300" height="300">
                    </li>`
    drinks.appendChild(drinksList);

    content.appendChild(menu);
}