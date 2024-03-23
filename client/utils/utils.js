export async function updateViews(blogID, router) {
    router.push(`/page/${blogID}`)
    const fet = await fetch('http://localhost:8000/apiv1/update-views', { method: 'PUT', headers: {'Content-Type' : 'application/json'},body: JSON.stringify({blogId: blogID})})
    const res = await fet.json() 
    console.log(res);
}