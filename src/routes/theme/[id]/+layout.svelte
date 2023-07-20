<script>
    import Section from "$lib/Section.svelte"

    let style = 'max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md -dark:bg-gray-800 mt-10'
</script>

<Section style={style}>
    <slot/>
</Section>