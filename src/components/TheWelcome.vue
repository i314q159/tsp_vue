<script setup>
import WelcomeItem from './WelcomeItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <EcosystemIcon/>
        </template>
        <template #heading>无人船环境监测路径可视化</template>
    </WelcomeItem>

</template>
