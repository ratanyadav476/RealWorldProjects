import React, { useEffect, useMemo, useState } from "react";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const ac = new AbortController();
        (async () => {
            try {
                setLoading(true);
                const res = await fetch(API_URL, { signal: ac.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setRecipes(Array.isArray(data.meals) ? data.meals : []);
            } catch (e) {
                if (e.name !== "AbortError") setError(e.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        })();
        return () => ac.abort();
    }, [])

    const filteredRecipes = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return recipes;
        return recipes.filter((m) => m.strMeal.toLowerCase().includes(q));
    }, [query, recipes]);

    if (loading) return <Spinner />;
    if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

    return (
        <div className="p-4 space-y-4">
            <div className="flex m-auto gap-2 max-w-xl text-center">
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search meals (e.g., salmon, shrimp)…"
                    className="w-full bg-slate-800 p-2 rounded-2xl border px-4 py-2 outline-none focus:ring "
                    aria-label="Search meals"
                />
                {query && (
                    <button
                        onClick={() => setQuery("")}
                        className="rounded-2xl border px-3 py-2"
                        title="Clear"
                    >
                        Clear
                    </button>
                )}
            </div>

            <div className="text-sm text-gray-600">
                Showing {filteredRecipes.length} of {recipes.length}
            </div>

            {filteredRecipes.length === 0 ? (
                <div className="p-6 text-center">
                    <h2 className="clock mx-auto text-lg font-semibold"></h2>
                    <p className="text-sm text-gray-600">Try a different keyword.</p>
                </div>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredRecipes.map((meal) => (
                        <ProductCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
            )}
        </div>
    );
}
