import { Link } from "react-router-dom";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";
import { useMemo } from "react";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorites = useMemo(() => favorites.length, [favorites]);
  return (
    <>
      <h1 className="text-4xl font-bold">Favoritos</h1>
      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <Link className="block text-center text-xl underline m-10 " to="/">
          No hay favoritos aún, agrega algunos dando click en este texto
        </Link>
      )}
    </>
  );
}
