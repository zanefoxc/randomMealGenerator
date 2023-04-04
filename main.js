// Define an object to hold ingredient options
const ingredientOptions = {
    // Create an array of protein objects
    proteinOptions: [
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
    ],
    // No additional specificity is needed for vegetables, place them all in the same array
    vegetableOptions: [
        "Broccoli", "Carrots", "Tomatoes",
        "Spinach", "Cabbage", "Bell peppers",
        "Cauliflower", "Eggplant", "Zucchini",
        "Green beans", "Asparagus", "Lettuce",
        "Onions", "Garlic", "Potatoes",
        "Sweet potatoes", "Beets", "Radishes",
        "Brussels sprouts", "Artichokes"
    ],
    fruitOptions: [
        "Apples", "Bananas",  "Oranges",
        "Grapes", "Pineapple", "Strawberries",
        "Blueberries", "Mangoes", "Watermelon",
        "Peaches", "Pears", "Kiwis",
        "Plums", "Cherries", "Grapefruit",
        "Papaya", "Cantaloupe", "Apricots",
        "Blackberries", "Raspberries"
    ],
    // Create an array of dairy objects then organize them the same way as protein above
    dairyOptions: [
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
    ],
    oilAndSpiceOptions: [
        "Olive oil", "Canola oil", "Vegetable oil",
        "Coconut oil", "Sesame oil", "Peanut oil", 
        "Avocado oil", "Sunflower oil", "Salt",
        "Pepper", "Cumin", "Paprika",
        "Chili powder", "Cinnamon", "Garlic powder",
        "Onion powder", "Oregano", "Basil",
        "Thyme", "Rosemary", "Bay leaves",
        "Curry powder"
    ],
    // Once again organized as protein and dairy
    arrMisc: [
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
    ]
}

const defineComposition = (flavor) => {
    switch (flavor) {
        case 'Sweet':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            break;
        case 'Savory':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            break;
        case 'Spicy':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            break;
        case 'Sour':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            break;
        case 'Bitter':
            console.log(`You have chosen ${flavor} this will weigh your meal generation appropriately`);
            break;
        default:
            console.log(`${flavor} is invalid please choose from Sweet, Savory, Spicy, Sour, or Bitter`);
            return;
    }
   const arrIngredients = Object.keys(ingredientOptions);
}

console.log(Object.keys(ingredientOptions));