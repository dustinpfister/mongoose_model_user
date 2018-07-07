// create a Mongo instance
var conn = new Mongo(),

// get database
db = conn.getDB('mongoose_users'),

auth = auth || null;

if (auth) {

    db.auth(auth.username, auth.password);

}

// get the user
var user = db.getUser('dustin');

// if we have the user drop them
if (user) {

    // drop the user
    db.dropUser('dustin');

} else {

    // the user is not there to drop
    print('the user is not there to drop');

}
