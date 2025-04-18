import { streamText } from 'ai'
import { openrouter } from '../lib/ia'

export default {
    async generateRecipe(prompt: string) {
        const result = await streamText({
            model: openrouter('shisa-ai/shisa-v2-llama3.3-70b:free'),
            prompt: prompt,
            system: "Genera solo información sobre recetas de bebidas con la estructura: Descripción, Ingredientes, Instrucciones. Si te preguntan otra cosa diferente a recetas, responde que no puedes ayudar con eso.",
        })
        return result.textStream
        
    }
}