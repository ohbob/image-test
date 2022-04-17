 // src/routes/posts.ts
    
 import type { EndpointOutput } from '@sveltejs/kit';
    
 export async function get(): Promise<EndpointOutput> {
     const res = await fetch('http://144.91.100.171:1337/api/posts');
     const data = await res.json();
 
     return { body: data };
 }