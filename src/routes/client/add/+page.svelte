<script>
    import { postApi } from "../../../api/api";
    
    let client = {
        name: '',
        email: ''
    }

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



<form on:submit={() => addClient()}>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={client.name}>
    <label for="email">Email</label>
    <input type="text" id="email" bind:value={client.email}>
    <button>Save</button>
</form>