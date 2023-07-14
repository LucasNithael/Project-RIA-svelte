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

            themes = themes.filter((theme) => theme.id !== id);
        } catch(error){
            console.log(error)
        }
    }
    
</script>



<section class="bg-gray-200">
    <div class="container px-6 py-10 mx-auto">
        

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            {#each themes as {id, name, color, price}}
                <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style="background-image:url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')">
                    
                    <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                        <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{name}</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase text-blue-800 ">R${price}</p>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase text-900 ">{color}</p>
                        <div class="flex justify-end">

                            <a href="/theme/{id}" class="edit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>
                                  
                            </a>
                            
                            <button class="delete ml-4"  on:click={() => deleteTheme(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  
                            </button>

                              
                        </div>
                    </div>
                    
                
                </div>
            {/each}

            
                 
        </div>
    </div>
</section>