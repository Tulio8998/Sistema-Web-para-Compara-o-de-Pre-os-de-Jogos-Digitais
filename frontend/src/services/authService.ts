export async function login(email: string, password: string) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    console.log("STATUS:", response.status);

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}

export async function createAccount(name: string, email: string, password: string) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    });

    const data = await response.json();

    console.log("STATUS:", response.status);

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}