addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
	  let response = await fetch("https://drand.cloudflare.com/public/latest");
	  let data = await response.json();
	  return new Response( JSON.stringify(data), {
	    headers: { 
	    	'content-type': 'application/json',
	    	'Access-Control-Allow-Origin': '*'
	    },
	  })
}
