<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { getApi, putApi } from '../../../api/api.js';
    import Form from '$lib/Form.svelte';
    import Input from '$lib/Input.svelte';

    export let data
    const id = data.id

    let client = {
        name: '',
        email: ''
    }

    /**
     * @type {{ type: string; label: string; bind: { name: string; email: string; }; }[]}
     */
    let inputs = []

    onMount(async () => {
        try{
            client = await getApi(`/clients/${id}/`)
          
            inputs = [
                {type: 'text', label: 'name', bind: client},
                {type: 'email', label: 'email', bind: client}
             ]
            
        } catch (error){
            console.log(error)
        }
    })


    const editclient = async () => {
        try{
            await putApi(`/clients/${id}/`, client)
            console.log('Alterado')
            window.location.href = '/client'
        } catch(error){
            console.log(error)
        }
    }

</script>

<h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Edit client</h2>

<Form myFn={editclient}>
    <Input inputs={inputs} />
</Form>