import { useRouteError } from "react-router-dom"

export function PageError() {
    const error = useRouteError()
    return <>
        <h1>une erreur est survenue maggle</h1>
        <p>
            {/* Si on a une erreur avec une clé erreur on l'affiche avec toString */}
            {error?.error?.toString() ?? error?.toString()}
        </p>
    </>
}