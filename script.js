document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    const mainMenu = document.getElementById('main-menu');
    const barMenu = document.getElementById('bar-menu');
    const kitchenMenu = document.getElementById('kitchen-menu');
    const alcoholCocktailsMenu = document.getElementById('alcohol-cocktails-menu');
    const nonAlcoholCocktailsMenu = document.getElementById('non-alcohol-cocktails-menu');
    const teaMenu = document.getElementById('tea-menu');
    const alcoholMenu = document.getElementById('alcohol-menu');
    const startMenu = document.getElementById('start-menu');
    const mainDishesMenu = document.getElementById('main-dishes-menu');
    const fastfoodMenu = document.getElementById('fastfood-menu');
    const sushiMenu = document.getElementById('sushi-menu');

    // Показать главное меню через 3 секунды
    setTimeout(() => {
        logo.classList.add('hidden');
        mainMenu.classList.remove('hidden');
        history.replaceState({menu: 'main'}, '', '#main'); // Устанавливаем начальное состояние
    }, 3000);

    // Навигация в меню Бар
    document.getElementById('bar-btn').addEventListener('click', () => {
        mainMenu.classList.add('hidden');
        barMenu.classList.remove('hidden');
        history.pushState({menu: 'bar'}, '', '#bar');
    });

    document.getElementById('kitchen-btn').addEventListener('click', () => {
        mainMenu.classList.add('hidden');
        kitchenMenu.classList.remove('hidden');
        history.pushState({menu: 'kitchen'}, '', '#kitchen');
    });

    // Подменю Бар
    document.getElementById('alcohol-cocktails-btn').addEventListener('click', () => {
        barMenu.classList.add('hidden');
        alcoholCocktailsMenu.classList.remove('hidden');
        history.pushState({menu: 'alcohol-cocktails'}, '', '#alcohol-cocktails');
    });

    document.getElementById('non-alcohol-cocktails-btn').addEventListener('click', () => {
        barMenu.classList.add('hidden');
        nonAlcoholCocktailsMenu.classList.remove('hidden');
        history.pushState({menu: 'non-alcohol-cocktails'}, '', '#non-alcohol-cocktails');
    });

    document.getElementById('tea-btn').addEventListener('click', () => {
        barMenu.classList.add('hidden');
        teaMenu.classList.remove('hidden');
        history.pushState({menu: 'tea'}, '', '#tea');
    });

    document.getElementById('alcohol-btn').addEventListener('click', () => {
        barMenu.classList.add('hidden');
        alcoholMenu.classList.remove('hidden');
        history.pushState({menu: 'alcohol'}, '', '#alcohol');
    });

    // Подменю Кухня
    document.getElementById('start-btn').addEventListener('click', () => {
        kitchenMenu.classList.add('hidden');
        startMenu.classList.remove('hidden');
        history.pushState({menu: 'start'}, '', '#start');
    });

    document.getElementById('main-dishes-btn').addEventListener('click', () => {
        kitchenMenu.classList.add('hidden');
        mainDishesMenu.classList.remove('hidden');
        history.pushState({menu: 'main-dishes'}, '', '#main-dishes');
    });

    document.getElementById('fastfood-btn').addEventListener('click', () => {
        kitchenMenu.classList.add('hidden');
        fastfoodMenu.classList.remove('hidden');
        history.pushState({menu: 'fastfood'}, '', '#fastfood');
    });

    document.getElementById('sushi-btn').addEventListener('click', () => {
        kitchenMenu.classList.add('hidden');
        sushiMenu.classList.remove('hidden');
        history.pushState({menu: 'sushi'}, '', '#sushi');
    });

    // Навигация кнопок назад на странице
    document.querySelectorAll('.back-btn').forEach(button => {
        button.addEventListener('click', () => {
            window.history.back(); // Используем history.back() вместо pushState или replaceState
        });
    });

    // Обработка кнопок браузера назад/вперед
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            hideAllMenus();
            switch (event.state.menu) {
                case 'main':
                    mainMenu.classList.remove('hidden');
                    break;
                case 'bar':
                    barMenu.classList.remove('hidden');
                    break;
                case 'kitchen':
                    kitchenMenu.classList.remove('hidden');
                    break;
                case 'alcohol-cocktails':
                    alcoholCocktailsMenu.classList.remove('hidden');
                    break;
                case 'non-alcohol-cocktails':
                    nonAlcoholCocktailsMenu.classList.remove('hidden');
                    break;
                case 'tea':
                    teaMenu.classList.remove('hidden');
                    break;
                case 'alcohol':
                    alcoholMenu.classList.remove('hidden');
                    break;
                case 'start':
                    startMenu.classList.remove('hidden');
                    break;
                case 'main-dishes':
                    mainDishesMenu.classList.remove('hidden');
                    break;
                case 'fastfood':
                    fastfoodMenu.classList.remove('hidden');
                    break;
                case 'sushi':
                    sushiMenu.classList.remove('hidden');
                    break;
            }
        }
    });

    // Скрыть все меню
    function hideAllMenus() {
        mainMenu.classList.add('hidden');
        barMenu.classList.add('hidden');
        kitchenMenu.classList.add('hidden');
        alcoholCocktailsMenu.classList.add('hidden');
        nonAlcoholCocktailsMenu.classList.add('hidden');
        teaMenu.classList.add('hidden');
        alcoholMenu.classList.add('hidden');
        startMenu.classList.add('hidden');
        mainDishesMenu.classList.add('hidden');
        fastfoodMenu.classList.add('hidden');
        sushiMenu.classList.add('hidden');
    }
});
