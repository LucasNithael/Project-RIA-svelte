<script>
    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';

    export let data

    let client = {
        name: '',
        email: ''
    }

    const id = data.id

    onMount(async () => {
        try{
            client = await getApi(`/clients/${id}/`)
        } catch (error){
            console.log(error)
        }
    })


    const editclient = async () => {
        try{
            await putApi(`/clients/${id}/`, client)
            console.log('Alterado')
            window.location.href = '/client'
        } catch(error){
            console.log(error)
        }
    }

</script>


<form on:submit={() => editclient()}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={client.name}>
    <label for="email">Email</label>
    <input type="text" id="email" bind:value={client.email}>
    <button>Save</button>
</form>