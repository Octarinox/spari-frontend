export async function POST(request: Request) {
    const req = await request.json();

    try {
        const response = await fetch("https://octarinox.tech/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email: req.email, password: req.password }),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("network response was not OK");
        }

        const rawCookies = response.headers.get("set-cookie");
        return new Response(JSON.stringify({message: "Success"}), {
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": rawCookies,
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
