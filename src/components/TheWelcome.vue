<script setup>
import WelcomeItem from './WelcomeItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <EcosystemIcon/>
        </template>
        <template #heading>TSP问题可视化</template>
    </WelcomeItem>

</template>
