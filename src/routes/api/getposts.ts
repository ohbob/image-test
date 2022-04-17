 // src/routes/posts.ts
    
 import type { EndpointOutput } from '@sveltejs/kit';
    
 export async function get(): Promise<EndpointOutput> {
     const res = await fetch('http://server.nallus.com:1337/api/posts');
     const data = await res.json();
 
     return { body: data };
 }