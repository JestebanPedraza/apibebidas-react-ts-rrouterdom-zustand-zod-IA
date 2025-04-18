import {StateCreator} from "zustand"
import IaServices from "../services/IaServices";

export type IaSlice = {
    recipe: string;
    isGenerating: boolean;
    generateRecipe: (prompt: string) => Promise<void>;
}

export const createIaSlice : StateCreator<IaSlice, [], [], IaSlice> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) =>{
        set({recipe: '', isGenerating: true})
        const data = await IaServices.generateRecipe(prompt) 
        for await (const textPart of data) {
            set((state) => ({
                recipe: state.recipe + textPart
            }))
        }
        set({ isGenerating: false})
    }
})