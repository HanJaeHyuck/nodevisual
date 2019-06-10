const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('test.sqlite');

db.serialize(() => { //순차적으로 실행될수 있도록 만드는것
    db.run("CREATE TABLE IF NOT EXISTS items(name, value)");

    let stmt = db.prepare("INSERT INTO items VALUES(?, ?)");
    stmt.run(["gondr99", 59]);
    stmt.run(["gondr", 22]);
    stmt.run(["asd", 23]);

    stmt.finalize(); //이것을 써야지 쓸수 있다.
});