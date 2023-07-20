<script>
    import { onMount } from "svelte";
    import { getApi } from "../../api/api";
    import { get } from "svelte/store";

    /**
     * @type {any[]}
     */
    let rents = []
    /**
     * @type {any[]}
     */
    let clients = []
    /**
     * @type {any[]}
     */
    let themes = []

    onMount( async () => {
        try{
            rents = await getApi('/rents/')
            clients = await getApi('/clients/')
            themes = await getApi('/themes/')
            
        } catch (error){
            console.log(error)
        }   
    })

    let ths = [
        'Client',
        'Theme',
        'Location',
        'Date',
        'Start time / Finish time'

    ]

</script>





    <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 md:rounded-lg">

                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-200">
                            <tr>
                                {#each ths as th}
                                    
                                    <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-800">
                                        <div class="flex justify-center items-center">
                                            <h1 class="font-bold">{th}</h1>
                                        </div>
                                    </th>

                                {/each}

                                <th scope="col" >
                                    
                                </th>
                                

                               
                            </tr>
                        </thead>

                        {#each rents as {date, start_hours, client, theme, address, end_hours}}
                            
                        
                            <tbody class="bg-white divide-y divide-gray-800">
                                <tr>
                                    <td class="border">
                                        <div class="flex justify-center items-center flex-col p-4">
                    
                                            {#each clients as {id, name, email}}
                                                {#if id == client}
                                                    <p class="font-medium text-gray-800  ">{name}</p>
                                                    <p class="text-sm font-normal text-gray-600 ">{email}</p>

                                                {/if}
                                            {/each}
                    
                                        </div>
                                    </td>
                                    <td class="border">
                                        <div class="flex justify-center items-center flex-col">
                                            {#each themes as {id, name, price}}
                                                {#if id == theme}
                                                
                                                    <p>{name}</p>
                                                    <p>R$ {price}</p>
                                                
                                                {/if}
                                            
                                            {/each}
                                        </div>
                                    </td>
                                    <td class="border">
                                        <div class="flex justify-center items-center flex-col"> 
                                            <p>Endereço</p>
                                        </div>
                                    </td>
                                    
                                    <td class="border">
                                        <div class="flex justify-center items-center flex-col">
                                            <p class="font-normal text-gray-800">{date}</p>
                                        </div>
                                    </td>

                                    <td class="border">
                                        <div class="flex justify-center items-center flex-col">
                                            <p class="font-normal text-gray-800">{start_hours}/{end_hours}</p>
                                        </div>
                                    </td>

                                    <td>
                                        <div class="flex justify-center items-center p-4">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                                </svg>
                                            </button>
                                            <a href="#" class="edit ml-4">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                </svg>
                        
                                            </a>
                                        </div>
                                        
                                    </td>
                                </tr>
        
                            </tbody>
                        
                        {/each}
                        
                    </table>

                </div>
            </div>
        </div>
    </div>

