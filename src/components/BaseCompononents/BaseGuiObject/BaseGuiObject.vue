<template>
  <div
    class="box"
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
export default {
  name: "BaseGuiObject",
  props: {
    boxData: Object,
    dragEndData: Object
  },
  data() {
    return {
      styleProperty: {
        position: "absolute",
        top: "0px",
        left: "0px"
      },

      mouseOffset: {
        posX: 0,
        posY: 0
      }
    };
  },
  watch: {
    boxData: function() {
      console.log("changedBoxDATA");
      this.styleProperty.left = this.boxData.style.left + "px";
      this.styleProperty.top = this.boxData.style.top + "px";
    }
  },

  created: function() {
    this.styleProperty.left = this.boxData.style.left + "px";
    this.styleProperty.top = this.boxData.style.top + "px";
  },

  methods: {
    dragStart: function(event) {
      event.dataTransfer.setData("Text/plain", event.target.id);

      this.mouseOffset.posX = event.offsetX;
      this.mouseOffset.posY = event.offsetY;
    },

    dragging: function() {
      //todo something
    },

    dragEnd: function() {
      let posX = this.dragEndData.x;
      let posY = this.dragEndData.y;

      posX -= this.mouseOffset.posX;
      posY -= this.mouseOffset.posY;
      this.styleProperty.top = posY + "px";
      this.styleProperty.left = posX + "px";
      let data = {
        id: this.boxData.id,
        top: posY,
        left: posX
      };
      this.$emit("update-child-data", data);
    },
    setActive: function() {
      console.log("Click Box Id:" + this.boxData.id);
      this.$emit("set-child-active", this.boxData.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: $maincolorred;
  color: $maincolorfont;
  width: 150px;
  height: 150px;
  top: 0;
  left: 0;
}
</style>
