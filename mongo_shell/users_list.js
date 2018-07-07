// create a Mongo instance
conn = new Mongo();

// get the database
db = conn.getDB('mongoose_users');

// the user info.
printjson({
    "dbName": db.getName(),
    "users": db.getUsers()
});
