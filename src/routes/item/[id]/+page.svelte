<script>
    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';

    export let data

    let item = {
        name: '',
        description: ''
    }

    const id = data.id

    onMount(async () => {
        try{
            item = await getApi(`/itens/${id}/`)
        } catch (error){
            console.log(error)
        }
    })


    const editItem = async () => {
        try{
            await putApi(`/itens/${id}/`, item)
            console.log('Alterado')
        } catch(error){
            console.log(error)
        }
    }

</script>


<form on:submit={() => editItem()}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={item.name}>
    <label for="description">Description</label>
    <input type="text" id="description" bind:value={item.description}>
    <button>Save</button>
</form>