import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

export async function GET(request, { params }) {
    console.log("GET")
    try {
        let id = params.id
        const result = await conn.query('SELECT * FROM users WHERE id = ?', id)

        if (result[0].length > 0) {
            return Response.json({
                data: result[0][0]
            })
        } else {
            return Response.json({
                message: "Not Found"
            })
        }
    } catch (error) {
        console.log("errorMessage", error.message);
        return Response.json({ message: "Error !!" })
    }
}

export async function PUT(request, { params }) {
    console.log("PUT")

    try {
        let id = params.id
        let updateUser = await request.json()
        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id])
        return Response.json({
            message: "Update User Success !!",
            data: result[0]
        })
    } catch (error) {
        console.log("errorMessage", error.message);
        return Response.json({ message: "Error !!" })
    }

}

export async function DELETE(request, { params }) {
    console.log("DELETE")

    try {
        let id = params.id
        const result = await conn.query('DELETE from users WHERE id = ?', id)
        return Response.json({
            message: "Delete user Success !!",
            data: result[0]
        })
    } catch (error) {
        console.log("errorMessage", error.message);
        return Response.json({ message: "Error !!" })
    }
}



