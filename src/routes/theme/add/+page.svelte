<script>
    import { onMount } from "svelte";
    import { getApi, postApi } from "../../../api/api";
    
    let theme = {
        name: '',
        color: '',
        price: 0,
        itens: [],
    }

    /**
     * @type {any[]}
     */
    let items = []

    const addTheme = async () => {
        try{
            const checkboxes = document.querySelectorAll(".checkbox")
            
            for (const c of checkboxes) {
                // @ts-ignore
                if(c.checked){
                    // @ts-ignore
                    theme.itens.push(c.id)
                    
                }
            }
            
            await postApi('/themes/', theme)
            console.log('Tema cadastrado')
        } catch(error){
            console.log(error)
        }
    }

    onMount(async () => {
        try{
            items = await getApi('/itens/')
        } catch (error){
            console.log(error)
        }
    })


</script>



<form on:submit={() => addTheme()}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={theme.name}>
    <label for="color">Color</label>
    <input type="text" id="color" bind:value={theme.color}>
    <label for="price">Price</label>
    <input type="number" id="price" bind:value={theme.price} >
    <br>
    <h3>Items</h3>
    {#each items as {id, name}}
        <label for="{id}">{name}</label>
        <input class="checkbox"  type="checkbox" name="{name}" id="{id}">
        <br>
    {/each}

    <button>Save</button>
</form>