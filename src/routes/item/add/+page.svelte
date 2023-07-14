<script>
    import { postApi } from "../../../api/api";
    
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
</script>



<form on:submit={() => addItem()}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={item.name}>
    <label for="description">Description</label>
    <input type="text" id="description" bind:value={item.description}>
    <button>Save</button>
</form>