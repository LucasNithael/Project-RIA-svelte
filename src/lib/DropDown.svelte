<script>
    let isOpen = false;

    let list = [
        {
           name: 'add item',
           icon: 'bi bi-bag-plus-fill',
           href: '/item/add' 
        },
        {
           name: 'add theme',
           icon: 'bi bi-building-add', 
           href: '/theme/add' 
        },
        {
           name: 'add client',
           icon: 'bi bi-person-plus-fill', 
           href: '/client/add' 
        },
        {
           name: 'add rent',
           icon: 'bi bi-patch-plus', 
           href: '/rent/add' 
        },
    ]

</script>
  
  <div class="relative inline-block">
    <!-- Dropdown toggle button -->
    <button
      on:click={() => isOpen = !isOpen} class="relative z-10 block p-2 text-gray-700 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 --dark:focus:ring-opacity-40 focus:ring-blue-300 --dark:focus:ring-blue-400 focus:ring bg-gray-800 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
      </svg>
    </button>
  
    <!-- Dropdown menu -->
    {#if isOpen}
      <div class="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl --dark:bg-gray-800">
        
        {#each list as {name, icon, href}}            
            <a href="{href}" class="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform --dark:text-gray-300 hover:bg-gray-100 --dark:hover:bg-gray-700 --dark:hover:text-white">
                <i class="{icon}"></i>
    
            <span class="mx-1">{name}</span>
            </a>
        {/each}

      </div>
    {/if}
  </div>

  <style>
    i{
        font-size: 20px;
        margin-right: 30px;
    }
  </style>
  