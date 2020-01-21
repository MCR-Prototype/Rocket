<template>
  <md-button
    class="md-raised"
    draggable="true"
    v-bind:style="styleProperty"
    v-on:dragstart="dragStart"
    v-on:drag="dragging"
    v-on:dragend="dragEnd"
    v-on:click="setActive"
  >
    {{ boxData.message }}
  </md-button>
</template>

<script>
import baseGuiMixin from "@/components/BaseCompononents/BaseGuiObject/MixinBaseGuiObject";
export default {
  name: "GuiButton",
  mixins: [baseGuiMixin],
  props: {},
  data() {
    return {
      styleProperty: {
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundColor: "green"
      },

      mouseOffset: {
        posX: 0,
        posY: 0
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.gui-button {
  background-color: $maincolorred;
  color: $maincolorfont;
  width: 150px;
  height: 150px;
  top: 0;
  left: 0;
}
</style>
