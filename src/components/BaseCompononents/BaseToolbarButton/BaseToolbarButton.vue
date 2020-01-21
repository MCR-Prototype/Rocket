<template>
  <button class="ToolbarButton">{{ label }}</button>
</template>

<script>
export default {
  name: "BaseToolbarButton",
  props: {
    label: String
  },
  data: function() {
    return {
      btnLabel: "Button"
    };
  }
};
</script>

<style lang="scss" scoped>
.ToolbarButton {
  color: $maincolorfont;
  width: 64px;
  height: 64px;
  background-color: $maincolorred;
  border: none;
  margin-right: 5px;
}
</style>
