// create a Mongo instance
conn = new Mongo();

// get database
db = conn.getDB('mongoose_users');

// get the user
user = db.getUser('dustin');

// if we have the user drop them
if (user) {

    // drop the user
    db.dropUser('dustin');

} else {

    // the user is not there to drop
    print('the user is not there to drop');

}
