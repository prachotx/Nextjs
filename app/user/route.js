import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

export async function GET() {
    console.log("GET")

    let result = await conn.query('SELECT * FROM users');
    return Response.json({ message: "Users All", data: result[0] })

}

export async function POST(request) {
    console.log("POST")

    try {
        const newUser = await request.json()
        const result = await conn.query('INSERT INTO users SET ?', newUser)
        return Response.json({ message: "Create User Succsess !!", data: result[0] })
    } catch (error) {
        console.log("errorMessage", error.message);
        return Response.json({ message: "Error !!" })
    }

}

