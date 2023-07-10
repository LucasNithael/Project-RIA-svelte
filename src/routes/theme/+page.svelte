<script>
    import axios from 'axios'
    import { onMount } from 'svelte';
    import { deleteApi, getApi } from '../../api/api';

    
    /**
     * @type {any[]}
     */
    let themes = []

    onMount(async () => {
        try{
            themes = await getApi('/themes/')
            console.log(themes)
        } catch (error){
            console.log(error)
        }
    })

    // @ts-ignore
    const deleteTheme = async (id) => {
        try{ 
            await deleteApi(`/themes/${id}/`)
            console.log(`Tema deletado de id ${id} `)
        } catch(error){
            console.log(error)
        }
    }
    
</script>



{#each themes as {id, name, color, price}}
    <h2>{name}</h2>
    <p>{color} - {price}</p>
    <button on:click={() => deleteTheme(id)}>delete</button>
    <hr>
{/each}