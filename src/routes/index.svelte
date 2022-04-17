<script context="module">
    /** @type {import('./[slug]').Load} */  export async function load({ params, fetch, session, stuff }) {
      const url = `/api/getposts`;
      const response = await fetch(url);
  
      return {
        status: response.status,
        props: { posts: await response.json() }
      };
    }
  </script>


<script lang="ts">
    export let posts;
   

    import header from '$lib/editorjsComponents/Header.svelte';
    import paragraph from '$lib/editorjsComponents/Paragraph.svelte';
    import image from '$lib/editorjsComponents/Image.svelte';
    import quote from '$lib/editorjsComponents/Quote.svelte';
    import list from '$lib/editorjsComponents/List.svelte';
    import delimiter from '$lib/editorjsComponents/Delimiter.svelte';
    import checklist from '$lib/editorjsComponents/Checklist.svelte';
    import embed from '$lib/editorjsComponents/Embed.svelte';
    import code from "$lib/editorjsComponents/Code.svelte"
    const components = {header, paragraph, image, quote, list, delimiter, checklist, embed, code};



</script>


<div style="max-width: 920px; margin: 0 auto;">
{#each posts.data.reverse() as post}
    <h1>{post.attributes.title}</h1>
    <p>
    {#each JSON.parse(post.attributes.content).blocks as block}
        <svelte:component this={components[block.type]} data={block}/>
        {/each}
     </p>
    {/each}
</div>

<style>
    div{
        font-family: Arial, Helvetica, sans-serif;
    }
</style>