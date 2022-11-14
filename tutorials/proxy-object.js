const gameSettings = {
    difficulty: 'easy',
}

const difficulties = {
    easy: "easy",
    hard: "hard",
    veryHard: "very hard"
}

const gameSettingsProxy = new Proxy(gameSettings, {
    get: (object, property) => {
        return property in object ? object[property].toUpperCase() : `The property "${property}" doesn't exist.`;
    },
    set: (object, property, value) => {
        if (property === "difficulty" && difficulties[value]) {
            object[property] = value;
        } else {
            console.log("This property doesn't exist.");
        }
    },
    has: (object, property) => {
        if (property === "difficulty") {
            return property;
        } else {
            return `The ${object} doesn't have property ${property}.`;
        }
    },
});



const displayPanel = document.querySelector('#result');
const list = document.createElement("ul");
displayPanel.appendChild(list);

// ============================ GET ============================
// get a property that exist
const listItem = document.createElement("li");
listItem.textContent = `The game difficulty is "${gameSettingsProxy.difficulty}".`;
list.appendChild(listItem);

// get a property that doesn't exist
const listItem2 = document.createElement("li");
listItem2.textContent = gameSettingsProxy.age;
list.appendChild(listItem2);

// ============================ SET ============================
// set a property that exist
gameSettingsProxy.difficulty = "hard";
const listItem3 = document.createElement("li");
listItem3.textContent = `The game difficulty is now "${gameSettingsProxy.difficulty}".`;
list.appendChild(listItem3);

// set a property that doesn't exist
gameSettingsProxy.age = 3;

// ===================== HAS ("IN" keyword) =====================
// has a property
console.log("difficulty" in gameSettingsProxy);
// doesn't have a property
console.log("age" in gameSettingsProxy);
