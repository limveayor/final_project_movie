
// MARK: contain all actions we request to API
export async function getPopularMovie(){
    let response = await fetch(`${import.meta.env.VITE_BASE_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
    let data = await response.json()
    return data
}