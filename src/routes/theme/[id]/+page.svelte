<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';
    import Input from '$lib/Input.svelte';
    import Form from '$lib/Form.svelte';

    export let data

    let theme = {
        name: '',
        color: '',
        price: 0,
        itens: []

    }

    
    /**
     * @type {any[]}
     */
    let items = []
    
    
    const id = data.id

    let inputs = []

    onMount(async () => {
        try{

            theme = await getApi(`/themes/${id}/`)
            items = await getApi('/itens/')
            inputs = [
                {type: 'text', label: 'name', bind: theme},
                {type: 'text', label: 'color', bind: theme},
                {type: 'text', label: 'price', bind: theme},
            ]

        } catch (error){
            console.log(error)
        }
    })


    const editTheme = async () => {
        try{
            const checkboxes = document.querySelectorAll(".checkbox")
            let aux_items = []
            for (const c of checkboxes) {
                // @ts-ignore
                if(c.checked){
                    // @ts-ignore
                    aux_items.push(c.id)
                    
                }
            }
            theme.itens = aux_items
            // @ts-ignore
            console.log(theme)
            await putApi(`/themes/${id}/`, theme)
            console.log('Alterado')
            window.location.href = '/theme'
        } catch(error){
            console.log(error)
        }
    }

    

   

</script>



    <h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Register Item</h2>

    <Form myFun={editTheme}>

        <Input inputs={inputs}/>

        <div class="itens">
            <div class="itens-content text-gray-700 border p-5 flex flex-col mt-5 justify-start">
                <h3 class="font-bold mb-3">Items</h3>
                {#each items as { id, name }}
                    <div class="boxes">
                        {#if theme.itens.includes(id)}
                        <input type="checkbox" class="checkbox" name="{name}" id="{id}" checked>
                        {:else}
                        <input type="checkbox" class="checkbox" name="{name}" id="{id}">
                        {/if}
                        <label class="text-gray-700" for="{id}">{name}</label>
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


