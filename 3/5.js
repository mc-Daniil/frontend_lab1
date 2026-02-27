function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let copy;

    if (Array.isArray(obj)) {
        copy = [];
    }
    else {
        copy = {};
    }

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

let Obj = {
    name: "Pupa",
    hobbies: ["Pupa", "Lupa"],
    address: {                    
        city: "Pupa",
        street: "Lupa"
    }
};

let copyObj = deepCopy(Obj);
copyObj.hobbies[0] = "Lupa";
alert(Obj.hobbies[0] + " i " + copyObj.hobbies[0]);

