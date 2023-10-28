<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <HelloWorld msg="Multi-Document Knowledge Graph Visualization" />
    <div>
        <a href='/kg-visualize/pages/network2d.html' target="_blank">
            <img src="./assets/2d.svg" class="logo" alt="2D network logo" />
        </a>
        <a href="/kg-visualize/pages/network3d.html" target="_blank">
            <img src="./assets/3d.png" class="logo" alt="3D network logo" />
        </a>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
