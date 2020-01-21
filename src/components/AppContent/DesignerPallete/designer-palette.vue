<template>
  <div class="palette">
    <div class="pallete-header">
      <button v-on:click="togglePropertys">
        {{ labelToggleButton }}
      </button>
    </div>
    <div class="pallete-body">
      <div class="propertys" v-cloak v-if="showPropertys">
        <p>Properties</p>
        <p class="p-label">
          Name: <br />
          {{ activeComponentData.message }}
        </p>
        <p class="p-label">ID: {{ activeComponentData.id }}</p>
        <base-property
          v-for="(value, key) in activeComponentData.style"
          v-bind:key="'property' + key"
          v-bind:property-name="key"
          v-bind:property-value="value"
          property-type="text"
          v-on:update-property="changeProperty"
        />
      </div>
      <div class="items">
        <p>Items</p>
        <base-toolbar-button
          v-for="component in listOfComponents"
          v-bind:key="component.id"
          class="PaletteButton"
          v-bind:label="component.name"
          v-on:click.native="newChild(component.type)"
        >
        </base-toolbar-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseToolbarButton from "@/components/BaseCompononents/BaseToolbarButton/BaseToolbarButton";
import BaseProperty from "@/components/BaseCompononents/BaseProperty/BaseProperty";
export default {
  name: "DesignerPalette",
  components: { BaseProperty, BaseToolbarButton },
  props: {
    listOfComponents: Array,
    activeComponentData: Object
  },
  data() {
    return {
      showPropertys: true,
      labelToggleButton: "Hide"
    };
  },
  methods: {
    togglePropertys: function() {
      console.log("test");
      this.showPropertys = !this.showPropertys;
      if (this.showPropertys) this.labelToggleButton = "Hide";
      else this.labelToggleButton = "Show";
    },
    newChild: function(childType) {
      this.$emit("add-new-child", childType);
    },
    changeProperty: function(propertyData) {
      this.$emit("update-active-child", propertyData);
    }
  },
  created: function() {
    console.log("DesignerPalette created ----------------->>>");
  }
};
</script>

<style lang="scss" scoped>
.palette {
  background-color: $maincolorgrey;
  color: $maincolorgrey;
  font-family: "Eurostile ExtendedTwo", Arial;
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .pallete-header {
    align-items: center;
    height: auto;
  }
  .pallete-body {
    display: flex;
    flex-direction: row;
    margin: 5px;

    .items {
      justify-content: flex-start;
      background-color: $maincolorgrey2;
      height: auto;
      width: min(90px);
      display: flex;
      flex-direction: column;
    }
    .propertys {
      background-color: $maincolorgrey2;
      display: flex;
      height: auto;
      width: min(120px);
      justify-content: flex-start;
      flex-direction: column;
      margin-right: 5px;
      margin-left: 5px;
    }
  }
}

.ToolbarButton.PaletteButton {
  background-color: $maincolorred;
  width: 32px;
  height: 32px;
  font-size: 8pt;
  margin: 5px;
}
</style>
