<script>
  import "../app.postcss";

  import Header from "$lib/Header.svelte"
  import SideBar from "$lib/SideBar.svelte";
</script>

<Header/>
<SideBar/>
<slot />
