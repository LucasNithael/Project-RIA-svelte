<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';
    import Input from '$lib/Input.svelte';
    import Form from '$lib/Form.svelte';

    export let data

    let rent = {}

    
    /**
     * @type {any[]}
     */
    let themes = []
    let clients = []
    
    const id = data.id

    let inputs = []

    onMount(async () => {
        try{

            rent = await getApi(`/rents/${id}/`)
            console.log(rent)
            clients = await getApi('/clients/')
            themes = await getApi('/themes/')

            inputs = [
                {type: 'text', label: 'start_hours', bind: rent},
                {type: 'text', label: 'end_hours', bind: rent},
            ]

        } catch (error){
            console.log(error)
        }
    })


    const editRent = async () => {
        try{
            const radios_theme  = document.getElementsByName('theme_selection')
            for (const radio of radios_theme) {
                if(radio.checked){
                    rent.theme = parseInt(radio.id)
                }
            }

            const radios_client  = document.getElementsByName('client_selection')
            for (const radio of radios_client) {
                if(radio.checked){
                    rent.client = parseInt(radio.id)
                }
            }


            // @ts-ignore
            
            await putApi(`/rents/${id}/`, rent)
           
            window.location.href = '/rent'
        } catch(error){
            console.log(error)
        }
    }

    

   

</script>



    <h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Edit rent</h2>
    
    <Form myFun={editRent}> 
     
        <label for="date" class="text-gray-700">Date</label>

        <input bind:value={rent.date} type="date" id="date" placeholder="John Doe" class="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
        
        <Input inputs={inputs} />

            <div class="flex justify-around mt-5">

                <div class="themes border p-5">
                    <h1 class="mb-3 font-bold">Themes</h1>

                    {#each themes as {id, name}}
                    
                        <div>
                            {#if rent.theme == id}
                                <input checked type="radio" name="theme_selection"  id="{id}">
                            {:else}
                                <input type="radio" name="theme_selection"  id="{id}">
                            {/if}
                            <label for="{id}">{name}</label>
                        
                        </div>

                    {/each}
                </div>

                <div class="clients border p-5">
                    <h1 class="mb-3 font-bold">Clients</h1>
                    {#each clients as {id, name}}
                    
                        <div>
                            {#if rent.client == id}
                                <input checked type="radio" name="client_selection"  id="{id}">
                            {:else}
                                <input type="radio" name="client_selection"  id="{id}">
                            {/if}
                            <label for="{id}">{name}</label>
                        
                        </div>

                    {/each}
                    
                </div>
            
            </div>
            


        
    </Form>
        
           
          
           


       

        
 



<style>
    .itens-content{
        width: 400px;
    }
</style>


