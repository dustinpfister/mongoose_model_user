// create a Mongo instance
conn = new Mongo();

// get the admin db
db = conn.getDB('mongoose_users');

// authenticate
//db.auth('mrSmith', '1234');

// if the admin account exists get it, or null
user = db.getUser('dustin');

// if we do not have the user, create the user
if (user) {

    // then create the user
    db.dropUser('dustin');

} else {

    print('the user is not there to drop');

}
