<template>
  <div
    class="workarea"
    v-bind:style="styleProp"
    v-on:drop="drop"
    v-on:dragover="allowDrop"
    v-on:mousemove="mouseMove"
  >
    <component
      v-for="child in childData.childs"
      v-bind:is="child.type"
      v-bind:drag-end-data="dragEndData"
      v-bind:box-data="child"
      v-bind:key="'child' + child.id"
      v-bind:ref="'child' + child.id"
      v-bind:itemList="itemsForList"
      v-on:update-child-data="updateChild"
      v-on:set-child-active="setActiveChild"
    >
    </component>
  </div>
</template>

<script>
import BaseGuiObject from "@/components/BaseCompononents/BaseGuiObject/BaseGuiObject";
import GuiBox from "@/components/BaseCompononents/BaseGuiObject/GuiBox";
import GuiList from "@/components/BaseCompononents/BaseGuiObject/GuiList";
import GuiButton from "@/components/BaseCompononents/BaseGuiObject/GuiButton";

export default {
  name: "DesignerWorkarea",
  components: { BaseGuiObject, GuiBox, GuiList, GuiButton },
  props: {
    childData: Object,
    resolutionData: Object
  },
  data() {
    return {
      dragEndData: {
        x: 0,
        y: 0
      },
      styleProp: {
        minWidth: "1200px",
        height: "600px"
      },
      itemsForList: [
        { icon: "move_to_inbox", text: "Inbox" },
        { icon: "send", text: "Sent Mail" },
        { icon: "delete", text: "Trash" },
        { icon: "error", text: "Spam" }
      ]
    };
  },
  watch: {
    "resolutionData.width": function() {
      this.styleProp.minWidth = this.resolutionData.width + "px";
    },
    "resolutionData.height": function() {
      this.styleProp.height = this.resolutionData.height + "px";
    }
  },
  methods: {
    allowDrop: function(event) {
      event.preventDefault();
    },
    drop: function(event) {
      event.preventDefault();
      let posX = event.clientX;
      let posY = event.clientY;
      let target = event.target;
      let rect = target.getBoundingClientRect();

      posX -= Math.ceil(rect.left);
      posY -= Math.ceil(rect.top);

      this.dragEndData.x = posX;
      this.dragEndData.y = posY;
    },
    mouseMove: function(event) {
      let posY = event.offsetY;
      let posX = event.offsetX;
      this.$store.commit(
        "changeLogMessage",
        "MouseMove: X:" + posX + " Y:" + posY
      );
    },
    updateChild: function(data) {
      this.$emit("update-child", data);
    },
    setActiveChild: function(data) {
      this.$emit("set-active-child", data);
    }
  }
};
</script>

<style lang="scss">
.workarea {
  overflow: auto;
  overflow-x: scroll;
  background-color: white;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
}
</style>
