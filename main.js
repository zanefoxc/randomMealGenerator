// Create an array to hold ingredient option objects
const ingredientOptions = [
    // Create an object with assigned id and value which will be used later
    // Id 0 Protein Options
    {id: 0, value: 0, options: [
        // Meat
        "Beef", "Pork", "Lamb",
        "Venison", "Rabbit",
        // Poultry
        "Chicken", "Turkey", "Duck",
        "Quail", "Cornish hen", "Goose",
        // Seafood
        "Salmon", "Tuna", "Cod",
        "Trout", "Halibut", "Sardines",
        "Anchovies", "Mackerel", "Shrimp",
        "Crab", "Lobster", "Scallops",
        "Clams", "Mussels", "Oysters",
        // Tofu
        "Silken tofu", "Firm tofu", "Extra-firm tofu",
        "Super-firm tofu",
        // Beans
        "Black beans", "Kidney beans", "Garbanzo beans (chickpeas)",
        "Navy beans", "Pinto beans", "Cannellini beans",
        "Lima beans", "Great Northern beans", "Adzuki beans",
        "Black-eyed peas", "Butter beans", "Fava beans",
        "Mung beans", "Red beans", "White beans",
        "Soybeans", "Lentils"
    ]},
    // Id 1 Vegetable Options
    {id: 1, value: 0, options: [
        "Broccoli", "Carrots", "Tomatoes",
        "Spinach", "Cabbage", "Bell peppers",
        "Cauliflower", "Eggplant", "Zucchini",
        "Green beans", "Asparagus", "Lettuce",
        "Onions", "Garlic", "Potatoes",
        "Sweet potatoes", "Beets", "Radishes",
        "Brussels sprouts", "Artichokes"
    ]},
    // Id 2 Fruit Options
    {id: 2, value: 0, options: [
        "Apples", "Bananas",  "Oranges",
        "Grapes", "Pineapple", "Strawberries",
        "Blueberries", "Mangoes", "Watermelon",
        "Peaches", "Pears", "Kiwis",
        "Plums", "Cherries", "Grapefruit",
        "Papaya", "Cantaloupe", "Apricots",
        "Blackberries", "Raspberries"
    ]},
    // Create an object for dairy the same way as protein above
    // Id 3 Diary Options
    {id: 3, value: 0, options: [
        // Milk
        "Whole milk", "Skim milk", "Low-fat milk",
        "Fat-free milk", "Almond milk", "Soy milk",
        "Coconut milk", "Oat milk", "Cashew milk",
        "Rice milk",
        // Cream
        "Heavy cream", "Whipping cream", "Half and half",
        "Light cream", "Coffee creamer", "Sour cream",
        "Creme fraiche",
        // Cheese
        "Cheddar", "Mozzarella", "Parmesan",
        "Gouda", "Brie", "Camembert",
        "Feta", "Blue cheese", "Gorgonzola",
        "Roquefort", "Emmental", "Gruyere",
        "Colby", "Swiss", "Provolone",
        "Monterey Jack",
        // Yogurt
        "Greek yogurt", "Plain yogurt", "Natural yogurt",
        "Balkan yogurt", "Icelandic yogurt", "Skyr",
        "Labneh", "Kefir",
        // Butter
        "Unsalted butter",  "Salted butter", "Whipped butter",
        "Clarified butter", "Cultured butter", "Ghee"
    ]},
    // Id 4 Oil Options
    {id: 4, value: 0, options: [
        "Olive oil", "Canola oil", "Vegetable oil",
        "Coconut oil", "Sesame oil", "Peanut oil", 
        "Avocado oil", "Sunflower oil"
    ]},
    // Id 5 Spice Options
    {id: 5, value: 0, options: [
        "Allspice", "Anise Seed", "Caraway", "Cardamom", "Cocoa Powder",
        "Cayenne Pepper", "Celery Seed", "Chervil", "Chili Powder", 
        "Cinnamon", "Cloves", "Coriander", "Cumin", "Curry Powder", 
        "Dill Seed", "Fennel", "Fenugreek", "Garam Masala", "Garlic Powder", 
        "Ginger", "Mustard Seed", "Nutmeg", "Onion Powder", "Oregano", 
        "Paprika", "Paprika (Smoked)", "Parsley", "Poppy Seed", "Red Pepper Flakes", 
        "Rosemary", "Saffron", "Sage", "Salt", "Savory", "Sumac", 
        "Tarragon", "Thyme", "Turmeric", "Vanilla Bean", "Star Anise", 
        "Wasabi",  "White Pepper",  "Black Pepper",

    ]},
    // Once again organized as protein and dairy
    // Id 6 Misc Options
    {id: 6, value: 0, options: [
        // Bread
        "Baguette", "Brioche", "Challah",
        "Ciabatta", "Focaccia", "Multigrain",
        "Pita", "Rye", "Sourdough", 
        "White", "Whole wheat",
        // Pasta
        "Spaghetti", "Fettuccine", "Linguine",
        "Penne", "Rigatoni", "Farfalle",
        "Macaroni", "Rotini", "Angel hair",
        "Lasagna", "Cannelloni", "Ravioli",
        "Tortellini", "Orzo", "Couscous",
        "Udon", "Soba", "Ramen",
        "Spätzle",
        // Grain
        "Wheat", "Rice", "Barley",
        "Oats", "Quinoa", "Buckwheat",
        "Cornmeal", "Couscous", "Farro",
        "Millet", "Polenta",
        // Processed
        "Baking powder", "Baking soda", "Brown sugar",
        "Cornmeal", "Cornstarch", "Flour",
        "Sugar", "Garlic powder","Onion powder",
        "Vanilla extract", "Honey", "Maple syrup",
        "Molasses", "Mayonnaise", "Mustard",
        "Ketchup", "Soy sauce", "Worcestershire sauce",
        "Vinegar", "Peanut Butter"
    ]}
]

const createCompositionId = (flavor) => {
    const arrMealId = [];
    switch (flavor) {
        case 'Sweet':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            ingredientOptions[0].value = 1;
            ingredientOptions[1].value = 1;
            ingredientOptions[2].value = 4;
            ingredientOptions[3].value = 3;
            ingredientOptions[4].value = 1;
            ingredientOptions[5].value = 3;
            ingredientOptions[6].value = 2;
            break;
        case 'Savory':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            ingredientOptions[0].value = 3;
            ingredientOptions[1].value = 3;
            ingredientOptions[2].value = 1;
            ingredientOptions[3].value = 2;
            ingredientOptions[4].value = 2;
            ingredientOptions[5].value = 4;
            ingredientOptions[6].value = 2;
            break;
        default:
            console.log(`${flavor} is invalid please choose from Sweet, or Savory`);
            return;
    }
    for (i = 0; i < 10; i++) {
        const randomIngredientsId = ingredientOptions[Math.floor(Math.random() * ingredientOptions.length)].id;
        if (ingredientOptions[randomIngredientsId].value > 0) {
            arrMealId.push(randomIngredientsId);
            ingredientOptions[randomIngredientsId].value -= 1;
        } else {
            i--
        } 
   }
   console.log(arrMealId);
   return arrMealId;
}

const ingredientIdAndParser = (mealId) => {
    const arrIngredientId = []
    const arrIngredients = mealId.map(num => {
        const ranOptionIndex = Math.floor(Math.random() * ingredientOptions[num].options.length);
        arrIngredientId.push(ranOptionIndex);
        return ingredientOptions[num].options[ranOptionIndex];
    })
    return {
        arrIngredients,
        arrIngredientId
    };
}

//console.log(createCompositionId('Savory'));
console.log(ingredientIdAndParser(createCompositionId('Savory')));
