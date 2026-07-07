const db = require("../config/db");
const createPackage = (packageData, callback) => {
  const sql =
    "INSERT INTO packages    (title,description,location,price,duration,category,image) VAlUES(?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      packageData.title,
      packageData.description,
      packageData.location,
      packageData.price,
      packageData.duration,
      packageData.category,
      packageData.image,
    ],
    callback,
  );
};
//get all packages
const getAllPackages = (callback) => {
  const sql = "SELECT * FROM packages ORDER BY id DESC";
  db.query(sql, callback);
};
//get packagebyid
const getPackageById = (id, callback) => {
  const sql = "SELECT*FROM packages WHERE id=?";
  db.query(sql, [id], callback);
};

const updatePackage = (id, packageData, callback) => {
  const sql = `
        UPDATE packages
        SET
            title = ?,
            description = ?,
            location = ?,
            price = ?,
            duration = ?,
            category = ?,
            image = ?
        WHERE id = ?
    `;

  db.query(
    sql,
    [
      packageData.title,
      packageData.description,
      packageData.location,
      packageData.price,
      packageData.duration,
      packageData.category,
      packageData.image,
      id,
    ],
    callback,
  );
};

//delete package
const deletPackage = (id, callback) => {
  const sql = "DELETE FROM packages WHERE id=?";
  db.query(sql, [id], callback);
};

//export
module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletPackage,
};
