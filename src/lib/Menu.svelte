<script> 
    import { page } from "$app/stores";
    import Logo from "$lib/Logo.svelte"

    const style_class = 'border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
    const style_fixed = 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'

    const items = [
        {
            label: 'Inicio',
            href: '/',
            style: style_class
        },
        {
            label: 'Item',
            href: '/item',
            style: style_class
        },
        {
            label: 'Theme',
            href: '/theme',
            style: style_class
        },
        {
            label: 'Client',
            href: '/client',
            style: style_class
        },
        
    ]

</script>

<nav class="bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

        <Logo />

        {#each items as {label, href, style} }
            {#if $page.url.pathname === href}
                <a href={href} class={style_fixed}>{label}</a>
            {:else}
                <a href={href} class={style}>{label}</a>
            {/if}
        {/each}

      
    </div>
</nav>