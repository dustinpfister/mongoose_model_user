// create a Mongo instance
var conn = new Mongo(),

// get the database
db = conn.getDB('mongoose_users'),

auth = auth || null;

if (auth) {

    db.auth(auth.username, auth.password);

}

// the user info.
printjson({
    "dbName": db.getName(),
    "users": db.getUsers()
});
