

<script>
    export let content;
    export let direction;
</script>

{#if direction=="left"}
    <style>
        section {clip-path: polygon(0 50px, 0 100%, 100% calc(100% - 50px), 100% 0);}
    </style>
{:else}
    <style>
        section {clip-path: polygon(0 0, 0 calc(100% - 50px), 100% 100%, 100% 50px);}
    </style>
{/if}
<style>
    section {
        padding: 100px 150px 100px 150px;
        background-color: #202020;
        color: white;
        text-align: center;
    }
    div {
        margin-right: -100px;
        margin-left: -100px;
    }
    @media (max-width:420px) {
        div {
            margin-right: -75px;
            margin-left: -75px;
        }
    }
    
</style>

<section>
    <div>{@html content}</div>
</section>