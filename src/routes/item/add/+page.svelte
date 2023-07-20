<script>
    import { postApi } from "../../../api/api";
    import Input from "$lib/Input.svelte";
    import Form from "$lib/Form.svelte";

    
    let item = {
        name: '',
        description: ''
    }

    const addItem = async () => {
        try{
            await postApi('/itens/', item)
            console.log('Item cadastrado')
            window.location.href = '/item'
        } catch(error){
            console.log(error)
        }
    }

    let inputs = [
        {type: 'text', label: 'name', bind: item},
        {type: 'text', label: 'description', bind: item}
    ]

</script>


<h2 class="text-lg font-semibold text-gray-700 capitalize -dark:text-white">Register Item</h2>

    <Form myFun={addItem}>
        <Input inputs={inputs} />
    </Form>
    






