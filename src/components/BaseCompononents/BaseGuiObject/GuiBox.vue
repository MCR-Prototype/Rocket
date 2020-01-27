<template>
  <div
    class="gui-box"
    draggable="true"
    v-bind:style="styleProperty"
    v-on:dragstart="dragStart"
    v-on:drag="dragging"
    v-on:dragend="dragEnd"
    v-on:click="setActive"
  >
    {{ boxData.message }}
  </div>
</template>

<script>
  import baseGuiMixin from "@/components/BaseCompononents/BaseGuiObject/MixinBaseGuiObject";

  export default {
  name: "GuiBox",
  mixins: [baseGuiMixin],
  data() {
    return {
      styleProperty: {
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundColor: "red"
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
.gui-box {
  background-color: $maincolorred;
  color: $maincolorfont;
  width: 150px;
  height: 150px;
}
</style>
