<script>
    import { onMount } from 'svelte';
    import { deleteApi, getApi } from '../../api/api';

    /**
     * @type {any[]}
     */
    let items = []

    onMount(async () => {
        try{
            items = await getApi('/itens/')
            console.log(items)
        } catch (error){
            console.log(error)
        }
    })


    // @ts-ignore
    const deleteItem = async (id) => {
        try{
            await deleteApi(`/itens/${id}/`)
            console.log(`cliente deletado de id ${id}`)
        } catch (error){
            console.log(error)
        }
    }

</script>


{#each items as {id ,name, description}}
    <h2>{name}</h2>
    <p>{description}</p>
    <button on:click={() => deleteItem(id)}>delete</button>
    <a href="/item/{id}">edit</a>
    <hr>
{/each}