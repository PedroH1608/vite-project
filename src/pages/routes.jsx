import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokedexRoute } from "./pokedexRoute"
import { PokemonRoute } from "./pokemonRoute"

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PokedexRoute />} />
            <Route path="/pokemon/:name" element={<PokemonRoute />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }