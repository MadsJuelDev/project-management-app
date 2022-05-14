MongoDB shell Documentation:

<!-- for quick removal/insert of data -->

Download Mongodb shell

<!-- connect to db with dbhost line -->

db.collection.<method>({})

<!-- delete specific from collection (all that matches filter) -->
<!-- db.tasks.deleteMany({projectId: "Todo app 1"}) -->

db.collection.deleteMany({<field1>: <value1>, ...})

<!-- delete all from collection (leave empty)-->

db.collection.deleteMany({})

<!-- insert to collection same principle as the ones above -->

db.collection.insertMany({<field1>: <value1>, ...})
db.collection.insertOne()
