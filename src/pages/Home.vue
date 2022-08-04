<template>
    <BasicTemplate>
      <template v-slot:header>
        <BasicHeader/>
      </template>
    </BasicTemplate>
</template>

<script>
import BasicTemplate from '@/templates/BasicTemplate.vue';
import BasicHeader from '@/components/BasicHeader.vue';

export default {
    name: 'HomePage',
    components: {
      BasicTemplate,
      BasicHeader
    }
};
</script>
