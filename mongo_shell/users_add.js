// create a Mongo instance
var conn = new Mongo(),

// get the database
db = conn.getDB('mongoose_users'),

// get the user if it is there
user = db.getUser('dustin'),

auth = auth || null;

if (auth) {

    db.auth(auth.username, auth.password);

}

// if we do not have the user, create the user
if (!user) {

    // then create the user
    db.createUser({
        user: 'dustin',
        pwd: '1234',
        roles: [{
                role: 'dbOwner',
                db: 'mongoose_users'
            }
        ]
    });

} else {

    // the user exists, print info.
    printjson({
        "dbName": db.getName(),
        "adminUser": user
    });

}
