import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokemons } from './pokemons'
import { Pokemon } from './pokemon'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }