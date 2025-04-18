import { createRecipesSlice, RecipeSliceType} from "./recipeSlice";
import { CreateFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { CreateNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createIaSlice, IaSlice } from "./iaSlice";
 
export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType & IaSlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...CreateFavoritesSlice(...a),
    ...CreateNotificationSlice(...a),
    ...createIaSlice(...a),
    })))