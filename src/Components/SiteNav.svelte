<script>
    import CompanyLogo from "./CompanyLogo.svelte"
    export let name;
</script>

<style>
    #site-nav {
        width: 100%;
        height: 20vh;
        position: sticky;
        left: 0; 
        top: 0;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        background-color: #101010;
        clip-path: polygon(0 0, 0 100%, 100% calc(100% - 50px), 100% 0);
        z-index: 10;
    }
    nav {
        width: 50%;
        display: flex;
        justify-content: center;
        height: 100%;
    }
    button {
        padding: 0 50px;
        margin-top: 70px;
        width: 120px;
        height: 100%;
        border: none;
        color: white;
        background-color: inherit;
        position: relative;
    }
    button:hover {
        background-color: #444444;
    }
    button:active {
        color: #000000;
        background-color: white;
    }
    button h2 {
        position: absolute;
        left: 50%;
        top: 20px;
        transform: translateX(-50%)
    }
    .selected {
        background-color: #353535;
    }
</style>

<div id="site-nav">
    <CompanyLogo/>
    <nav>
        <a href="./"><button class="{name === 'Home' ? 'selected' : ''}">
            <h2>Home</h2>
            </button></a>
        <a href="./projects.html"><button class="{name === 'Projects' ? 'selected' : ''}">
            <h2>Projects</h2>
            </button></a>
        <a href="./contact.html"><button class="{name === 'Contact' ? 'selected' : ''}">
            <h2>Contact</h2>
            </button></a>
    </nav>
</div>