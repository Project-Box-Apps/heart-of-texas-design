let plans = [
    { name: "ML-001-001", originalName: "Benedetto", bedrooms: 4, fullBathrooms: 3, halfBathrooms: 1, stories: 2, garageSize: 3, squareFootage: 4338, price: 2169 },
    { name: "ML-002-001", originalName: "Hise", bedrooms: 5, fullBathrooms: 6, halfBathrooms: 2, stories: 2, garageSize: 3, squareFootage: 5264, price: 2632 },
    { name: "ML-003-001", originalName: "Delgado", bedrooms: 4, fullBathrooms: 3, halfBathrooms: 1, stories: 2, garageSize: 2, squareFootage: 2329, price: 1165 },
    { name: "ML-004-001", originalName: "Johnson", bedrooms: 5, fullBathrooms: 6, halfBathrooms: 2, stories: 2, garageSize: 4, squareFootage: 6010, price: 3005 },
    { name: "ML-005-001", originalName: "Kelly", bedrooms: 5, fullBathrooms: 4, halfBathrooms: 1, stories: 2, garageSize: 3, squareFootage: 4979, price: 2490 },
    { name: "ML-006-001", originalName: "Buckner", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 1, stories: 2, garageSize: 2, squareFootage: 2846, price: 1423 },
    { name: "ML-007-001", originalName: "Rasmussen", bedrooms: 3, fullBathrooms: 3, halfBathrooms: 1, stories: 2, garageSize: 2, squareFootage: 2776, price: 1388 },
    { name: "ML-008-001", originalName: "Seabolt", bedrooms: 4, fullBathrooms: 2, halfBathrooms: 1, stories: 1, garageSize: 2, squareFootage: 2294, price: 1147 },
    { name: "ML-009-001", originalName: "Bobbitt", bedrooms: 4, fullBathrooms: 4, halfBathrooms: 1, stories: 2, garageSize: 2, squareFootage: 3844, price: 1922 },
    { name: "ML-010-001", originalName: "Shah", bedrooms: 4, fullBathrooms: 3, halfBathrooms: 0, stories: 1, garageSize: 3, squareFootage: 3264, price: 1632 },
    { name: "MA-001-001", originalName: "Courmier", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 0, stories: 1, garageSize: 0, squareFootage: 2501, price: 1251 },
    { name: "MA-002-001", originalName: "Grimes", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 0, stories: 1, garageSize: 0, squareFootage: 1497, price: 749 },
    { name: "MA-003-001", originalName: "McCullough", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 0, stories: 1, garageSize: 0, squareFootage: 1504, price: 752 },
    { name: "MA-004-001", originalName: "Porras", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 0, stories: 1, garageSize: 0, squareFootage: 2501, price: 1251 },
    { name: "MA-005-001", originalName: "Relles", bedrooms: 4, fullBathrooms: 3, halfBathrooms: 1, stories: 1, garageSize: 0, squareFootage: 2396, price: 1198 },
    { name: "MA-006-001", originalName: "Spencer", bedrooms: 3, fullBathrooms: 3, halfBathrooms: 1, stories: 2, garageSize: 2, squareFootage: 2915, price: 1458 },
    { name: "MA-007-001", originalName: "Wooten", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 1, stories: 1, garageSize: 0, squareFootage: 2623, price: 1312 },
    { name: "MA-008-001", originalName: "Sullivan", bedrooms: 2, fullBathrooms: 2, halfBathrooms: 0, stories: 1, garageSize: 0, squareFootage: 1684, price: 842 },
    { name: "MA-009-001", originalName: "Gravett", bedrooms: 4, fullBathrooms: 3, halfBathrooms: 1, stories: 1, garageSize: 3, squareFootage: 2457, price: 1229 },
    { name: "MA-010-001", originalName: "Sudduth", bedrooms: 3, fullBathrooms: 2, halfBathrooms: 0, stories: 1, garageSize: 0, squareFootage: 1705, price: 853 },
];

// Check if exports is defined (commonJS-like environments)
if (typeof exports !== 'undefined') {
    // Export plans for commonJS-like environments
    exports.plans = plans;
}

// Check if module is defined (ES6 module environments)
if (typeof module !== 'undefined' && module.exports) {
    // Export plans for ES6 module environments
    module.exports = plans;
}
