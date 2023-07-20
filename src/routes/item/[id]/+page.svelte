<script>
    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';
    import Form from '$lib/Form.svelte';
    import Input from '$lib/Input.svelte';
    

    export let data

    let item = {
        name: '',
        description: ''
    }

    /**
     * @type {{ type: string; label: string; bind: { name: string; description: string; }; }[]}
     */
    let inputs = []


    const id = data.id

    onMount(async () => {
        try{
            item = await getApi(`/itens/${id}/`)
            inputs = [
                {type: 'text', label: 'name', bind: item},
                {type: 'text', label: 'description', bind: item},
            ]
        } catch (error){
            console.log(error)
        }
    })


    const editItem = async () => {
        try{
            await putApi(`/itens/${id}/`, item)
            console.log('Alterado')
            window.location.href = '/item'
        } catch(error){
            console.log(error)
        }
    }

    

</script>

<h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Edit Item</h2>

<Form myFun={editItem}>

    <Input inputs={inputs} />
    
    
</Form>


