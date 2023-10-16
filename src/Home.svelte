
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
  <p>Here at Inkblot Games, we're passionate about making money.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel leo nibh. Aenean blandit nisi at sem pharetra, vitae viverra risus imperdiet. Vestibulum imperdiet, lectus quis tincidunt porttitor, erat nulla sollicitudin risus, in bibendum quam libero ac ipsum. Integer laoreet dapibus nisi et accumsan. Morbi elementum mi sem, sed finibus odio posuere sed. Aenean pretium sit amet metus eu ornare. Phasellus varius mauris sed justo hendrerit, vel volutpat nisl ullamcorper. Phasellus quis tellus dui. Duis in hendrerit leo. Maecenas luctus auctor elit ut placerat. Donec quis eros lacus. Donec vestibulum mollis imperdiet.</p>
  <p>Suspendisse elementum luctus nisi quis tincidunt. Quisque eros mi, blandit non iaculis lobortis, vehicula vel nunc. Nunc hendrerit ex vitae sollicitudin posuere. Nunc lacus velit, pulvinar quis nunc egestas, dictum rhoncus nunc. Cras semper purus sed interdum placerat. Phasellus venenatis, ipsum sed feugiat sagittis, leo augue egestas arcu, a luctus diam risus ut tortor. Nullam tincidunt felis ac consectetur lobortis. Suspendisse lectus odio, tincidunt quis aliquam quis, pretium ut mi. Aenean at lacinia ligula, non aliquet erat. Proin pretium nec nulla vel convallis. Sed mollis lacus vitae turpis interdum, sit amet scelerisque ipsum egestas. Sed iaculis ultrices nisl sed malesuada. Morbi congue aliquet mattis. Suspendisse potenti. Pellentesque suscipit maximus tortor nec efficitur.</p>
  `
</script>


<main>
  <SiteNav name={name}/>
  <PageHeader name={name}/>
  <DescriptionBlock content={aboutUs} direction="right"/>
  <ContentCarousel/>
  <DescriptionBlock content={aboutUs} direction="left"/>
  <ContentCarousel/>
  <SiteFooter/>
</main>
