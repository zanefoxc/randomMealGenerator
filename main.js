// Create an array to hold ingredient option objects
const ingredientOptions = [
    // Create an object with assigned id and value which will be used later
    {id: 0, value: 0, proteinOptions: [
        // Each object has an array of values
        { _meat: [
        "Beef", "Pork", "Lamb",
        "Venison", "Rabbit"
    ]}, { _poultry: [
        "Chicken", "Turkey", "Duck",
        "Quail", "Cornish hen", "Goose"
    ]}, { _seafood: [
        "Salmon", "Tuna", "Cod",
        "Trout", "Halibut", "Sardines",
        "Anchovies", "Mackerel", "Shrimp",
        "Crab", "Lobster", "Scallops",
        "Clams", "Mussels", "Oysters"
    ]}, { _tofu: [
        "Silken tofu", "Firm tofu", "Extra-firm tofu",
        "Super-firm tofu"
    ]}, { _beans: [
        "Black beans", "Kidney beans", "Garbanzo beans (chickpeas)",
        "Navy beans", "Pinto beans", "Cannellini beans",
        "Lima beans", "Great Northern beans", "Adzuki beans",
        "Black-eyed peas", "Butter beans", "Fava beans",
        "Mung beans", "Red beans", "White beans",
        "Soybeans", "Lentils"
    ]}
    ]},
    // No additional specificity is needed for vegetables, place them all in the same array
    {id: 1, value: 0, vegetableOptions: [
        "Broccoli", "Carrots", "Tomatoes",
        "Spinach", "Cabbage", "Bell peppers",
        "Cauliflower", "Eggplant", "Zucchini",
        "Green beans", "Asparagus", "Lettuce",
        "Onions", "Garlic", "Potatoes",
        "Sweet potatoes", "Beets", "Radishes",
        "Brussels sprouts", "Artichokes"
    ]},
    {id: 2, value: 0, fruitOptions: [
        "Apples", "Bananas",  "Oranges",
        "Grapes", "Pineapple", "Strawberries",
        "Blueberries", "Mangoes", "Watermelon",
        "Peaches", "Pears", "Kiwis",
        "Plums", "Cherries", "Grapefruit",
        "Papaya", "Cantaloupe", "Apricots",
        "Blackberries", "Raspberries"
    ]},
    // Create an object for dairy the same way as protein above
    {id: 3, value: 0, dairyOptions: [
        { _milk: [
        "Whole milk", "Skim milk", "Low-fat milk",
        "Fat-free milk", "Almond milk", "Soy milk",
        "Coconut milk", "Oat milk", "Cashew milk",
        "Rice milk"
    ]}, { _cream: [
        "Heavy cream", "Whipping cream", "Half and half",
        "Light cream", "Coffee creamer", "Sour cream",
        "Creme fraiche"
    ]}, { _cheese: [
        "Cheddar", "Mozzarella", "Parmesan",
        "Gouda", "Brie", "Camembert",
        "Feta", "Blue cheese", "Gorgonzola",
        "Roquefort", "Emmental", "Gruyere",
        "Colby", "Swiss", "Provolone",
        "Monterey Jack"
    ]}, { _yogurt: [
        "Greek yogurt", "Plain yogurt", "Natural yogurt",
        "Balkan yogurt", "Icelandic yogurt", "Skyr",
        "Labneh", "Kefir"
    ]}, { _butter: [
        "Unsalted butter",  "Salted butter", "Whipped butter",
        "Clarified butter", "Cultured butter", "Ghee"
    ]}
    ]},
    {id: 4, value: 0, oilOptions: [
        "Olive oil", "Canola oil", "Vegetable oil",
        "Coconut oil", "Sesame oil", "Peanut oil", 
        "Avocado oil", "Sunflower oil"
    ]},
    {id: 5, value: 0, spiceOptions: [
        "allspice", "anise seed", "caraway", "cardamom", "cayenne pepper",
        "celery seed", "chervil", "chili powder", "cinnamon", "cloves",
        "coriander", "cumin", "curry powder", "dill seed", "fennel",
        "fenugreek", "garam masala", "garlic powder", "ginger", "mustard seed",
        "nutmeg", "onion powder", "oregano", "paprika", "paprika (smoked)",
        "parsley", "poppy seed", "red pepper flakes", "rosemary", "saffron",
        "sage", "salt", "savory", "star anise", "sumac",
        "tarragon", "thyme", "turmeric", "vanilla bean", "wasabi",
        "white pepper", "black pepper", "cocoa powder"
    ]},
    // Once again organized as protein and dairy
    {id: 6, value: 0, miscOptions: [
        { _bread: [
        "Baguette", "Brioche", "Challah",
        "Ciabatta", "Focaccia", "Multigrain",
        "Pita", "Rye", "Sourdough", 
        "White", "Whole wheat"
    ]}, { _pasta: [
        "Spaghetti", "Fettuccine", "Linguine",
        "Penne", "Rigatoni", "Farfalle",
        "Macaroni", "Rotini", "Angel hair",
        "Lasagna", "Cannelloni", "Ravioli",
        "Tortellini", "Orzo", "Couscous",
        "Udon", "Soba", "Ramen",
        "Spätzle"
    ]}, { _grain: [
        "Wheat", "Rice", "Barley",
        "Oats", "Quinoa", "Buckwheat",
        "Cornmeal", "Couscous", "Farro",
        "Millet", "Polenta"
    ]}, { _processed: [
        "Baking powder", "Baking soda", "Brown sugar",
        "Cornmeal", "Cornstarch", "Flour",
        "Sugar", "Garlic powder","Onion powder",
        "Vanilla extract", "Honey", "Maple syrup",
        "Molasses", "Mayonnaise", "Mustard",
        "Ketchup", "Soy sauce", "Worcestershire sauce",
        "Vinegar", "Peanut Butter"
    ]}
    ]}
]

const createComposition = (flavor) => {
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
            console.log(`Current value of id ${randomIngredientsId} is ${ingredientOptions[randomIngredientsId].value}`);
        } else {
            i--
        }
        
   }
   console.log(`Your meal id is ${arrMealId.join('')}`);
}

createComposition('Savory');