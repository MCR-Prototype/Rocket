<template>
  <div
    class="gui-list"
    draggable="true"
    v-bind:style="styleProperty"
    v-on:dragstart="dragStart"
    v-on:drag="dragging"
    v-on:dragend="dragEnd"
    v-on:click="setActive"
  >
    {{ boxData.message }}
    <md-list>
      <md-list-item
        v-for="(item, index) in itemList"
        v-bind:key="'Item' + index"
      >
        <md-icon>{{ item.icon }}</md-icon>
        <span class="mdd-list-item-text">{{ item.text }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import baseGuiMixin from "@/components/BaseCompononents/BaseGuiObject/MixinBaseGuiObject";
export default {
  name: "GuiList",
  mixins: [baseGuiMixin],
  props: {
    itemList: Array
  },
  data() {
    return {
      styleProperty: {
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundColor: "blue"
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
.gui-list {
  background-color: $maincolorred;
  color: $maincolorfont;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
}
</style>
