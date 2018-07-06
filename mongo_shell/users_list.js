// create a Mongo instance
conn = new Mongo();

// get the admin db
db = conn.getDB('mongoose_users');

db.auth('dustin','1234');

// the user exists, print info.
printjson({
    "dbName": db.getName(),
    "users": db.getUsers()
});
