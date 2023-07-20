<script>
// @ts-nocheck

    import { postApi } from "../../../api/api";
    import Input from "$lib/Input.svelte";
    import Form from "$lib/Form.svelte";

    let client = {
        name: '',
        email: ''
    }
    
    let inputs = [
        {type: 'text', label: 'name', bind: client},
        {type: 'email', label: 'email', bind: client}
    ]

    const addClient = async () => {
        try{
            await postApi('/clients/', client)
            console.log('client cadastrado')
            window.location.href = '/client'
        } catch(error){
            console.log(error)
        }
    }


   
</script>



    <h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Register  client</h2>

    <Form myFn={addClient}>
        <Input inputs={inputs} />
    </Form>
            

