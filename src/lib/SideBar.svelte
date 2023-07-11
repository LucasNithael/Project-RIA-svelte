<script>

    import { onMount } from 'svelte';

    let items = [];

    onMount(() => {
    items = Array.from(document.querySelectorAll('.item'));
    });
    
</script>

<div class="sidebar">
    <div class="btn-list">
        <i class="bi bi-list"></i>
    </div>

    <ul>
        <li class="item">
            <a href="#">
                <span class="icon"><i class="bi bi-clipboard2-plus"></i></span>
                <span class="txt-link">item</span>
            </a>
        </li>
        <li class="item">
            <a href="#">
                <span class="icon"><i class="bi bi-clipboard2-plus"></i></span>
                <span class="txt-link">item</span>
            </a>
        </li>
        <li class="item">
            <a href="#">
                <span class="icon"><i class="bi bi-clipboard2-plus"></i></span>
                <span class="txt-link">item</span>
            </a>
        </li>
    </ul>
</div>


<style>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 70px;
        height: 100%;
        background-color: #202020;
        padding: 40px 0 40px 1%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
        overflow: hidden;
        transition: 0.5s;
    }

    .sidebar:hover{
        width: 300px;
    }
    .btn-list{
        width: 100%;
        padding-left: 5px;
    }

    .btn-list > i{
        color: white;
        font-size: 24px;
        cursor: pointer;
    }

    ul{
        height: 100%;
        list-style-type: none;

    }

    ul li.item:hover{
        background-color: #ff0077;
    }

    ul li.item{
        transition: 1s;
    }

    ul li.item a{
        color: white;
        text-decoration: none;
        font-size: 20px;
        padding: 20px 4%;
        display: flex;
        margin-bottom: 20px;
        line-height: 40px;
    }


    ul li.item a .txt-link{
        margin-left: 40px;
    }

    ul li.item a .icon > i{
        font-size: 30px;
    }

</style>