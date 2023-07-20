<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { getApi, postApi } from "../../../api/api";
    import Input from "$lib/Input.svelte";
    import Form from "$lib/Form.svelte";
    
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

    
    let inputs = [
        {type: 'text', label: 'name', bind: theme},
        {type: 'text', label: 'color', bind: theme},
        {type: 'text', label: 'price', bind: theme},
    ]

    onMount(async () => {
        try{
            items = await getApi('/itens/')
        } catch (error){
            console.log(error)
        }
    })

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
            
            console.log(theme.itens)
            await postApi('/themes/', theme)

           window.location.href = '/theme'

        } catch(error){
            console.log(error)
        }
    }

    

</script>






    <h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Register Item</h2>

    <Form myFn={addTheme}> 
 
            <Input inputs={inputs} />


        <div class="itens">
            <div class="itens-content text-gray-700 border p-5 flex flex-col mt-5 justify-start">
                <h3 class="font-bold mb-3">Items</h3>
                {#each items as {id, name}}
                <div class="boxes">
                    <input  type="checkbox" class="checkbox"  name="{name}" id="{id}">
                    <label class=" text-gray-700 " for="{id}">{name}</label>
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