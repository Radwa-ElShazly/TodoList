<template>
    <div>
      <!-- Binding HTML Attributes -->
      <img :src="imageSrc" :alt="imageAlt">
  
      <!-- Binding Classes -->
      <div :class="{ active: isActive, 'text-danger': hasError }">
        Dynamic Class Binding
      </div>
  
      <!-- Binding Styles -->
      <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
        Dynamic Style Binding
      </div>
  
      <!-- Binding Props to a Child Component -->
      <ChildComponent :message="greeting" :count="number" />
  
      <!-- Binding Multiple Attributes -->
      <div v-bind="attrs">
        Bound Attributes
      </div>
  
      <!-- Dynamic Attribute Names -->
      <div :[attributeName]="attributeValue">
        Dynamic Attribute Name
      </div>
    </div>
  </template>


<script setup>
import { ref, reactive } from 'vue';
// import ChildComponent from './ChildComponent.vue';

// Data for binding
const imageSrc = ref('https://via.placeholder.com/150');
const imageAlt = ref('Placeholder Image');
const isActive = ref(true);
const hasError = ref(false);
const textColor = ref('blue');
const fontSize = ref(20);
const greeting = ref('Hello, Vue!');
const number = ref(42);
const attrs = reactive({
  id: 'my-div',
  class: 'container',
  'data-test': 'example',
});
const attributeName = ref('data-custom');
const attributeValue = ref('123');
</script>

<style>
.active {
  background-color: yellow;
}
.text-danger {
  color: red;
}
</style>