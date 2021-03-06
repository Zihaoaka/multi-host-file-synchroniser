"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Load LokiJs Collection
//A generic function to retrieve a LokiJs collection if exists, or create a new one if it doesn't.
const del = require("del");
const loadCollection = function (colName, db) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(colName) || db.addCollection(colName);
            resolve(_collection);
        });
    });
};
exports.loadCollection = loadCollection;
const cleanFolder = function (folderPath) {
    // delete files inside folder but not the folder itself
    del.sync([`${folderPath}/**`, `!${folderPath}`]);
};
exports.cleanFolder = cleanFolder;
//# sourceMappingURL=utils.js.map