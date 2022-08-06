<template>
    <v-app>
        <BasicHeader/>

        <v-main>
            <slot name="main"></slot>
        </v-main>
    </v-app>
</template>
  
<script>
import BasicHeader from '@/components/BasicHeader.vue'

export default {
    components: {
        BasicHeader
    },
    name: 'BasicTemplate',
}
</script>

<style>

</style>
