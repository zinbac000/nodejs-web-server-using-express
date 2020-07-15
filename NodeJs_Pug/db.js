const low = require("lowdb");
const lodashId = require("lodash-id");

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db._.mixin(lodashId);

const users = db.defaults({ users: [] }).get("users");
const products = db.defaults({ products: [] }).get("products");

module.exports.users = users;
module.exports.products = products;
