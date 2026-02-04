<template>
  <div class="vue-basic-container">
    <h1>{{ t("vue-basic.title") }}</h1>
    <div>
      <div class="card flex flex-wrap gap-2">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" removable />
      </div>
       <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ComfyApp } from "@comfyorg/comfyui-frontend-types";
import Chip from '@/volt/Chip.vue';
import MultiSelect from '@/volt/MultiSelect.vue';



declare global {
  interface Window {
    app?: ComfyApp;
  }
}

interface ComponentWidget {
  serializeValue?: (node: unknown, index: number) => Promise<unknown>;
}

const props = defineProps<{
  widget: ComponentWidget;
  node: { id: number };
}>();

const { t } = useI18n();

const selectedCities = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

onMounted(() => {
  props.widget.serializeValue = async (node, index) => {
    try {
      console.log("Vue Component: inside vue serializeValue");
      console.log("node", node);
      console.log("index", index);

      return {
        text: selectedCities.value,
      };
    } catch (error) {
      console.error("Vue Component: Error in serializeValue:", error);
      return { text: null };
    }
  };
});
</script>

<style scoped>
.vue-basic-container {
  padding: 8px;
  box-sizing: border-box;
}

.vue-basic-container h1 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
}
</style>
