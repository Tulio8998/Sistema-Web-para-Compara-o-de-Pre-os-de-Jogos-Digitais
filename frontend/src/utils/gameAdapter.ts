export function formatGamesDeals(games: any[]) {
    if (!Array.isArray(games)) return []; 

    const gamesMap = new Map();

    games.forEach((game) => {
        if (!game.deal || !game.deal.price) return; 

        const currentPrice = game.deal.price.amount;

        if (!gamesMap.has(game.id)) {
            gamesMap.set(game.id, {
                ...game,
                tags: game.tags || [],
            });
            return;
        }
        
        const savedGame = gamesMap.get(game.id);

        if (currentPrice < savedGame.deal.price.amount) {
            gamesMap.set(game.id, {
                ...game,
                tags: game.tags || [],
            });
        }
    });

    return Array.from(gamesMap.values());
}