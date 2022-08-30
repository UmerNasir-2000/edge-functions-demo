import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

export default async (_, context) => {

    const client = new Client({
        user: "postgres",
        password: "nqi5@j4fPg8WvhJ",
        database: "postgres",
        hostname: "db.nycrsvxlzaxsdopkqtlt.supabase.co",
        port: 6543,
        tls: { enabled: true }
    });

    await client.connect();

    const result = await client.queryObject("SELECT * FROM classifications")

    return context.json({ items: result.rows });

}