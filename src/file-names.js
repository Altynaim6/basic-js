const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
    let nameCount = new Map();
    let result = [];

    for (let name of names) {
        if (!nameCount.has(name)) {
            nameCount.set(name, 1);
            result.push(name);
        } else {
            let newName;
            let count = nameCount.get(name);
            
            do {
                newName = `${name}(${count})`;
                count++;
            } while (nameCount.has(newName));

            nameCount.set(name, count);
            nameCount.set(newName, 1);
            result.push(newName);
        }
    }

    return result;
}

module.exports = {
    renameFiles
};