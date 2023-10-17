<svelte:head>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </svelte:head>

<script>
    export let name;
    import SiteNav from "./Components/SiteNav.svelte"
    import PageHeader from "./Components/PageHeader.svelte"
    import SiteFooter from "./Components/SiteFooter.svelte";
    import DescriptionBlock from "./Components/DescriptionBlock.svelte";
    let contactInfo = `
    <p>Please send any inquiries to admin@inkblotgames.ca<p>
    `;
  </script>
  
  <main>
    <div class='flex-wrapper'>
      <SiteNav name={name}/>
      <PageHeader name={name}/>
      <DescriptionBlock content={contactInfo} direction="right"/>
      <SiteFooter/>
    </div>
  </main>
