<script>
    import CompanyLogo from "./CompanyLogo.svelte"
    export let name;
</script>

<style>
    #site-nav {
        width: 100%;
        height: 20vh;
        min-height: 80px;
        position: sticky;
        left: 0; 
        top: 0;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        background-color: #101010;
        clip-path: polygon(0 0, 0 100%, 100% calc(70%), 100% 0);
        z-index: 10;
    }
    nav {
        width: 50%;
        display: flex;
        justify-content: right;
        height: 80%;
        padding-right: 100px;
    }
    button {
        padding: 0 50px;
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
        top: 10%;
        transform: translateX(-50%);
        color: rgb(175, 175, 179);
    }
    .selected {
        background-color: #353535;
    }
    @media (max-width:750px) {
        button {
            width: 0px;
        }
        nav {
            padding-right: 0px;
        }
    }
    @media (max-width:420px) {
        button {
            padding: 15px 50px;
        }
        nav {
            flex-direction: column;
        }
        #site-nav {
            clip-path: polygon(0 0, 0 100%, 100% calc(80%), 100% 0);
        }
    }
</style>

<div id="site-nav">
    <CompanyLogo/>
    <nav>
        <a href="./"><button class="{name === 'Inkblot Games' ? 'selected' : ''}">
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