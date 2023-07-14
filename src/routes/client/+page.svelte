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
            clients = clients.filter((client) => client.id !== id)
        } catch (error){
            console.log(error)
        }
    }
    
</script>



<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {#each clients as {id, name, email}}
                
                <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border rounded-xl shadow-lg">
                    <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">

                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white ">{name}</h1>

                    <a href="mailto:{email}" class="mt-2 text-gray-500 capitalize dark:text-gray-300 ">{email}</a>

                    <div class="buttons mt-4 flex justify-end">
                        <button class="delete mr-4 mb-4" on:click={() => deleteClient(id)}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                              </svg>
                              
                        </button>


                        <a href="/client/{id}" class="edit mr-4">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
    
                        </a>

                    </div>
                    

                    
                </div>
            {/each}
        </div>
    </div>
</section>