
<svelte:head>
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
</svelte:head>

<script>
  export let name;
  import SiteNav from "./Components/SiteNav.svelte"
  import PageHeader from "./Components/PageHeader.svelte"
  import DescriptionBlock from "./Components/DescriptionBlock.svelte";
  import ContentCarousel from "./Components/ContentCarousel.svelte";
  import SiteFooter from "./Components/SiteFooter.svelte";
  let aboutUs = `
  <h1>Great mobile games, coming soon.</h1>
  `
</script>



<main>
  <div class='flex-wrapper'>
    <SiteNav name={name}/>
    <PageHeader name={"Inkblot Games"}/>
    <DescriptionBlock content={aboutUs} direction="right"/>
    <SiteFooter/>
  </div>
</main>
