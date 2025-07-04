import { Route, Routes } from "react-router-dom"
import { PokedexRoute } from "./pokedexRoute"
import { PokemonRoute } from "./pokemonRoute"

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<PokedexRoute />} />
        <Route path="/pokemon/:name" element={<PokemonRoute />} />
    </Routes>
)

export { AppRoutes }