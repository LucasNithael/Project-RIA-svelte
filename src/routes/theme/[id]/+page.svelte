<script>
    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';

    export let data

    let theme = {
        name: '',
        color: '',
        price: 0,
        itens: []

    }



    const id = data.id

    onMount(async () => {
        try{
            theme = await getApi(`/themes/${id}/`)
        } catch (error){
            console.log(error)
        }
    })


    const editItem = async () => {
        try{
            await putApi(`/themes/${id}/`, theme)
            console.log('Alterado')
            window.location.href = '/theme'
        } catch(error){
            console.log(error)
        }
    }



</script>


<form on:submit={() => editItem()}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={theme.name}>
    <label for="color">Color</label>
    <input type="text" id="color" bind:value={theme.color}>
    <label for="price">Price</label>
    <input type="number" id="price" bind:value={theme.price}>

    <button>Save</button>
</form>


