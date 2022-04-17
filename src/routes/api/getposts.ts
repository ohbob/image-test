 // src/routes/posts.ts
    
 import type { EndpointOutput } from '@sveltejs/kit';
    
 export async function get(): Promise<EndpointOutput> {
     const res = await fetch('https://bk1.nallus.com/api/posts');
     const data = await res.json();
 
     return { body: data };
 }