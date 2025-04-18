import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { CreateNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
    loadFromStorage: () => void;
}

export const CreateFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [],[], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink),
            }))
            CreateNotificationSlice(set, get, api).showNotification({text: "Se eliminó la receta de favoritos", error: false})
        } else {
            set((state) =>({
                favorites: [...state.favorites, recipe],
            }))
            CreateNotificationSlice(set, get, api ).showNotification({text: "Se agregó la receta a favoritos", error: false})
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storeFavorites = localStorage.getItem('favorites');
        if (storeFavorites) {
            set({ favorites: JSON.parse(storeFavorites) });
        } 
    }
})