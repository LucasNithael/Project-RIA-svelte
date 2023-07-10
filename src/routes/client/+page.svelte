<script>
    import { onMount } from 'svelte';
    import { getApi, deleteApi} from '../../api/api'
 
    
    /**
     * @type {any[]}
     */
    let clients = []

    onMount(async () => {
        try{
            clients = await getApi('/clients/')
            console.log(clients)
        } catch (error){
            console.log(error)
        }
    })


    // @ts-ignore
    const deleteClient = async (id) => {
        try{
            await deleteApi(`/clients/${id}/`)
            console.log(`cliente deletado de id ${id}`)
        } catch (error){
            console.log(error)
        }
    }
    
</script>



{#each clients as {id, name, email}}
    <h2>{name}</h2>
    <p>{email}</p>
    <button on:click={() => deleteClient(id)}>delete</button>
    <a href="/client/{id}/">edit</a>
    <hr>
{/each}