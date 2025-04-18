import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);
  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks]);
  return (
    <>
      <h1 className="text-4xl font-bold">Recetas</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="my-10 text-center text-xl">
            No hay resultados aún, llena el formulario
          </p>
        </>
      )}
    </>
  );
}
