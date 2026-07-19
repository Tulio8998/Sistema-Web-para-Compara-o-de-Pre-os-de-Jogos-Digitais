export async function getGamesDeals(limit = 60, offset = 0) {
    const url = `${import.meta.env.VITE_API_URL}/game?limit=${limit}&offset=${offset}`;

    console.log("URL CHAMADA:", url);

    const token = localStorage.getItem('token') || ''; 

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    });

    if (!response.ok) {
        console.error("Erro na requisição:", response.status);
        return []; 
    }

    return response.json();
}

export async function getGameById(id: string) {
    const url = `${import.meta.env.VITE_API_URL}/game/${id}`;
    const token = localStorage.getItem('token') || ''; 

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    });

    if (!response.ok) throw new Error('Erro ao buscar detalhes do jogo');
    
    return response.json();
}

export async function searchGamesByTitle(title: string) {
    const url = `${import.meta.env.VITE_API_URL}/game/search/${encodeURIComponent(title)}`;
    const token = localStorage.getItem('token') || '';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) return [];
    return response.json();
}

export async function getGamePrices(gameIds: string[]) {
    const url = `${import.meta.env.VITE_API_URL}/game/prices`;
    const token = localStorage.getItem('token') || '';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(gameIds)
    });

    if (!response.ok) return [];
    return response.json();
}

export async function getWishList() {
    const url = `${import.meta.env.VITE_API_URL}/wish-list`;
    const token = localStorage.getItem('token') || '';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) return [];
    return response.json();
}

export async function addGameToWishList(externalApiId: string) {
    const url = `${import.meta.env.VITE_API_URL}/wish-list`;
    const token = localStorage.getItem('token') || '';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ gameId: externalApiId, favorite: true, userId: 'auth-user' }) 
    });

    if (!response.ok) throw new Error('Falha ao adicionar aos favoritos');
    return response.json();
}

export async function removeGameFromWishList(wishListId: string) {
    const url = `${import.meta.env.VITE_API_URL}/wish-list/${wishListId}`;
    const token = localStorage.getItem('token') || '';

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) throw new Error('Falha ao remover dos favoritos');
    return response.json();
}