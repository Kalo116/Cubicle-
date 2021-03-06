const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' })

};

exports.getOne = (cubeId) => {
    return cubes[cubeId]
};

exports.getAll = (search = '', fromImput, toInput) => {
    const from = Number(fromImput) || 0;
    const to = Number(toInput) || 6;
    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);
    return result
};