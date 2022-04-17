<script>
    export let data = '';

    const items = data.data.code;
</script>

<section>
    <code>
        {@html items}
    </code>
</section>


<style>
    section{
        background: #666666;
        margin:20px;
        padding:20px;
        border-radius: 5px;
    }
    code{
        font-family: monospace;
        color:white
    }
</style>