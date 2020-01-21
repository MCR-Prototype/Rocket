<template>
  <div class="toolbar">
    <div class="row-one">
      <BaseToolbarButton
        v-on:click.native="clicked({ command: 'loadConfig' })"
        label="Load"
      />
      <BaseToolbarButton
        v-on:click.native="
          clicked({ command: 'saveConfig', fileName: 'test.txt' })
        "
        label="Save"
      />
      <BaseToolbarButton
        v-on:click.native="clicked({ command: 'resetConfig' })"
        label="Reset"
      />
      <BaseToolbarButton
        v-on:click.native="clicked({ command: 'loadApiConfig' })"
        label="LoadApi"
      />
      <BaseToolbarButton
        v-on:click.native="clicked({ command: 'saveApiConfig' })"
        label="SaveApi"
      />
      <BaseToolbarButton
        v-on:click.native="clicked({ command: 'testConfig' })"
        label="Test"
      />

      <form>
        <label>Resolution</label>
        <label for="width"> X: </label>
        <input
          type="text"
          id="width"
          placeholder="600"
          v-bind:value="resolution.width"
          v-on:change="resolutionChanged"
          ref="width"
        />
        <label for="height"> Y: </label>
        <input
          type="text"
          id="height"
          placeholder="600"
          v-bind:value="resolution.height"
          v-on:change="resolutionChanged"
          ref="height"
        />
      </form>
      <div class="output" id="output">
        {{ output }}
      </div>
    </div>
    <div class="row-two">
      <file-loader
        v-bind:showInput="showFileLoader"
        v-on:file-loaded="loadData"
        v-on:toggle-show-input="toggleFileLoader"
      />
    </div>
  </div>
</template>

<script>
import BaseToolbarButton from "@/components/BaseCompononents/BaseToolbarButton/BaseToolbarButton";
import FileLoader from "@/components/BaseCompononents/FileLoader/FileLoader";
export default {
  name: "DesignerToolbar",
  components: {
    FileLoader,
    BaseToolbarButton
  },
  props: {
    resolution: Object,
    output: String
  },
  data: function() {
    return {
      showFileLoader: false
    };
  },
  methods: {
    resolutionChanged: function() {
      let newResolution = {
        width: this.$refs.width.value,
        height: this.$refs.height.value
      };
      this.$emit("resolution-changed", newResolution);
    },

    clicked: function(cmdData) {
      if (cmdData.command === "loadConfig") this.showFileLoader = true;
      this.$emit("toolbar-button-blicked", cmdData);
    },
    loadData: function(data) {
      this.$emit("file-loaded", data);
    },
    toggleFileLoader: function() {
      this.showFileLoader = !this.showFileLoader;
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: $maincolorgrey;

  .row-one {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .row-two {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  form {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
    height: 32px;
    background-color: $maincolorgrey2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: $maincolorfont2;
  }
  input {
    width: 50px;
    margin-left: 5px;
  }

  .output {
    color: $maincolorfont2;
    width: 500px;
    height: 32px;
    background-color: $maincolorgrey2;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .fileInput input {
    width: 250px;
  }
}
</style>
