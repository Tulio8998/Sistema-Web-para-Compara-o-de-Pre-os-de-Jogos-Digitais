import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addGameToWishList, removeGameFromWishList, getWishList } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

interface FavoriteButtonProps {
    gameId: string; 
}

export function FavoriteButton({ gameId }: FavoriteButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [wishListId, setWishListId] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkFavorite() {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const favorites = await getWishList();
                const found = favorites.find((fav: any) => 
                    fav.game?.externalApiId === gameId || fav.gameId === gameId
                );
                
                if (found) {
                    setIsFavorite(true);
                    setWishListId(found.id); 
                }
            } catch (e) {
                console.log("Erro ao checar favoritos", e);
            }
        }
        checkFavorite();
    }, [gameId]);

    const handleToggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault(); 
        
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar logado para salvar jogos!');
            navigate('/signIn');
            return;
        }

        try {
            if (isFavorite && wishListId) {
                await removeGameFromWishList(wishListId);
                setIsFavorite(false);
                setWishListId(null);
            } else {
                const response = await addGameToWishList(gameId);
                setIsFavorite(true);
                setWishListId(response.id);
            }
        } catch (error) {
            alert('Erro ao modificar favoritos.');
        }
    };

    return (
        <span onClick={handleToggleFavorite} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {isFavorite ? (
                <FaHeart style={{ color: '#f53b57' }} />
            ) : (
                <FaRegHeart />
            )}
        </span>
    );
}