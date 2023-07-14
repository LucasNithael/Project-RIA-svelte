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

            items = items.filter((item) => item.id !== id)
        } catch (error){
            console.log(error)
        }
    }

</script>

<div class="flex justify-center items-center mt-5">

    <div class="grid grid-cols-3 gap-y-4 gap-x-4 mx-auto my-auto">
        
        
        {#each items as {id ,name, description}}
        <div class="border flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-500">
            <div class="w-1/3 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"></div>
        
            <div class="w-2/3 p-4 md:p-4">
                <h1 class="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>
        
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        
            </div>

            <div class="flex flex-col mt-3 item-center">
                    

                    <button class="delete mr-4 mb-4" on:click={() => deleteItem(id)}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                         class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                          </svg>
                          
                    </button>

                    <a href="/item/{id}" class="edit mr-4">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>

                    </a>

  
                  
            </div>

        </div>
        {/each}
        
    </div>
</div>




<style>
    .lucas{
        align-items: end;
    }
</style>