import mysql from "mysql2/promise";

declare global {
    var mysqlPool: mysql.Pool | undefined;
}

const db = globalThis.mysqlPool ?? mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "loja_roupas",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
});

if (!globalThis.mysqlPool) {
    globalThis.mysqlPool = db;
}

export default db;


