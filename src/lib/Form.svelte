<script>
    import ButtonSave from "./ButtonSave.svelte";

    /**
     * @type {() => any}
     */
     export let myFun
</script>

<form on:submit={() => myFun()}>
    <slot></slot>
    <ButtonSave />
</form>
