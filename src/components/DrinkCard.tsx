import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe);
  return (
    <div className="border-0 shadow-2xl w-sm ">
      <div className="overflow-hidden">
        <img
          className="hover:scale-125 transition duration-300 ease-in-out rounded-t-lg hover:rotate-2"
          src={drink.strDrinkThumb}
          alt={`imagen de ${drink.strDrink}`}
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg transition duration-300 ease-in-out cursor-pointer"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          Ver receta
        </button>
      </div>
    </div>
  );
}
