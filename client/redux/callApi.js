export async  function GET (url) {
   const fet = await fetch(`http://localhost:8000/${url}`)
   const res = await fet.json()
   return res;
}

export async function POST (url, body) {
   const fet = await fetch(`http://localhost:8000/${url}`, {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body : JSON.stringify(body)})
    return fet;
}