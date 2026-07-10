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