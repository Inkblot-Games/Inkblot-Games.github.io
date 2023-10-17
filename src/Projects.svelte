<svelte:head>
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
</svelte:head>

<script>
  export let name;
  import SiteNav from "./Components/SiteNav.svelte"
  import PageHeader from "./Components/PageHeader.svelte"
  import SiteFooter from "./Components/SiteFooter.svelte";
  import DescriptionBlock from "./Components/DescriptionBlock.svelte";
  let projectInfo = `
  <p>Coming soon</p>
  `
</script>

<main>
  <div class='flex-wrapper'>
    <SiteNav name={name}/>
    <PageHeader name={name}/>
    <DescriptionBlock content={projectInfo} direction="right"/>
    <SiteFooter/>
  </div>
</main>







