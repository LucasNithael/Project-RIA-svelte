<script> 
    import { page } from "$app/stores";
    import Logo from "$lib/Logo.svelte"
    import DropDown from "$lib/DropDown.svelte"

    const style_class = 'border-b-2 border-transparent transition-colors duration-300 transform hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
    const style_fixed = 'transition-colors duration-300 transform text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'

    const items = [
        {
            label: 'Home',
            href: '/',
            style: style_class
        },
        {
            label: 'Themes',
            href: '/theme',
            style: style_class
        },
        {
            label: 'Items',
            href: '/item',
            style: style_class
        },
        {
            label: 'Clients',
            href: '/client',
            style: style_class
        },
        {
            label: 'Rents',
            href: '/rent',
            style: style_class
        },
        
    ]

</script>

<nav class="shadow bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto capitalize text-gray-300">

        <Logo />

        {#each items as {label, href, style} }
            {#if $page.url.pathname === href}
                <a href={href} class={style_fixed}>{label}</a>
            {:else}
                <a href={href} class={style}>{label}</a>
            {/if}
        {/each}

        <DropDown />
    </div>
</nav>