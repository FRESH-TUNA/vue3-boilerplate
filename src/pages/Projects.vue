<template>
  <BasicTemplate>
    <template v-slot:header>
      <BasicHeader title="FRESHTUNA"/>
    </template>
  </BasicTemplate>
</template>

<script>
import BasicTemplate from '@/templates/BasicTemplate.vue';
import BasicHeader from '@/components/BasicHeader.vue';

export default {
  name: 'ProjectsPage',
  components: {
    BasicTemplate,
    BasicHeader
  }
}
</script>
