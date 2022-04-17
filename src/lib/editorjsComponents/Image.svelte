<script>
  export let data = "";
  const domain = "https://bk1.nallus.com/uploads/";
  const file = data.data.file;
  const url = file.url.replace("/uploads/", "");
  const caption = data.data.caption;
  export let w = "100%";
  export let c = "";
  let loaded = false;
  let quality = "q_50";
  export let src = "";
  let containerWidth;
  function load(img) {
    img.onload = () => (loaded = true);
  }
</script>

{#if file}
  <div class:loaded style="width: 100%; max-width:{w}">
    <div style="overflow: hidden;" bind:offsetWidth={containerWidth}>
      <picture>
        {#if containerWidth > 0}
          <source
            type="image/avif"
            srcSet="{domain}f_avif,{quality},w_{containerWidth}/{url}"
          />
          <source
            type="image/webp"
            srcSet="{domain}f_webp,{quality},w_{containerWidth}/{url}"
          />
          <!-- <source srcSet={domain}q_50,w_{containerWidth}/{url}>  -->
          <!-- <img use:load className="main {c}" alt="Image" src="{domain}{quality},w_{containerWidth}/{url}" loading="lazy"> -->
          <img />
        {/if}
      </picture>
    </div>
  </div>
{/if}
