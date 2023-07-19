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
            
            console.log(theme.itens)
            await postApi('/themes/', theme)

           window.location.href = '/theme'

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





<section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md -dark:bg-gray-800 mt-10">
    <h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Register Item</h2>

    <form on:submit={() => addTheme()}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 " for="name">Name</label>
                <input bind:value={theme.name} id="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md -dark:bg-gray-800 -dark:text-gray-300 -dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 " for="color">Color</label>
                <input bind:value={theme.color} id="color" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md -dark:bg-gray-800 -dark:text-gray-300 -dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

            <div>
                <label class="text-gray-700 " for="price">Price</label>
                <input bind:value={theme.price} id="price" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md -dark:bg-gray-800 -dark:text-gray-300 -dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -dark:focus:border-blue-300 focus:outline-none focus:ring">
            </div>

        </div>

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
       

        <div class="flex justify-start mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>


<style>
    .itens-content{
        width: 400px;
    }
</style>