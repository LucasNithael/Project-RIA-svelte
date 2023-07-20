<script>
    /**
     * @type {any}
     */
     export let inputs
    
    
</script>
<div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
    {#each inputs as {type, label, bind}}
        <div>
            <label class="text-gray-700 " for="{label}">{label}</label>
            <input bind:value={bind[label]} id="{label}"  
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md -dark:bg-gray-800 -dark:text-gray-300 -dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -dark:focus:border-blue-300 focus:outline-none focus:ring">
        </div>
    {/each}
</div>