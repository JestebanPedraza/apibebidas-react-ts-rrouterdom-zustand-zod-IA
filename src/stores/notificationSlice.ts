import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
    text: string;
    error: boolean;
    show: boolean;
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void;
    hideNotification: () => void
}

export const CreateNotificationSlice : StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: "",
        error: false,
        show: false,
    },
    showNotification: (payload) =>{
        set((state) => ({
            notification: {
                ...state.notification,
                text: payload.text,
                error: payload.error,
                show: true,
            },
        }));
        setTimeout(() => {
            get().hideNotification()
        }, 3000);
    },
    hideNotification: () => {
        set(() => ({
            notification: {
                text: "",
                error: false,
                show: false,
            },
        }));
    },

})