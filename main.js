const obtainFlavor = (flavor) => {
    switch (flavor) {
        case 'Sweet':
            console.log(`You have chosen ${flavor} this will weight your meal generation appropriately`);
            return flavor;
        case 'Savory':
            console.log(`You have chosen ${flavor} this will weight your meal generation appropriately`);
            return flavor;
        case 'Spicy':
            console.log(`You have chosen ${flavor} this will weight your meal generation appropriately`);
            return flavor;
        case 'Sour':
            console.log(`You have chosen ${flavor} this will weight your meal generation appropriately`);
            return flavor;
        case 'Bitter':
            console.log(`You have chosen ${flavor} this will weight your meal generation appropriately`);
            return flavor;
        default:
            console.log(`${flavor} Is invalid please choose from Sweet, Savory, Spicy, Sour, or Bitter`);
    }
}

randomMealFactory = {

}

obtainFlavor('Sweet');