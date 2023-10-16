<svelte:head>
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
</svelte:head>

<script>
  export let name;
  import SiteNav from "./Components/SiteNav.svelte"
  import PageHeader from "./Components/PageHeader.svelte"
</script>

<main>
  <SiteNav name={name}/>
  <PageHeader name={name}/>
</main>







