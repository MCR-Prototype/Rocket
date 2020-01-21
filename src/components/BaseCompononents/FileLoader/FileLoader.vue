<template>
  <div class="fileInput" v-cloak v-if="showInput">
    <input type="file" ref="myFile" v-on:change="selectedFile" /><br />
    <textarea v-model="text"> </textarea>
  </div>
</template>

<script>
export default {
  name: "FileLoader",
  props: {
    showInput: Boolean
  },
  data: function() {
    return {
      text: "FILE INPUT"
    };
  },
  methods: {
    selectedFile: function() {
      console.log("selected a file");
      console.log(this.$refs.myFile.files[0]);

      let file = this.$refs.myFile.files[0];
      if (!file || file.type !== "text/plain") return;

      // Credit: https://stackoverflow.com/a/754398/52160
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = evt => {
        this.text = evt.target.result;
        let data = JSON.parse(this.text);
        console.log("selectedFile");
        console.log(data);
        this.$emit("file-loaded", data);
        this.$emit("toggle-show-input");
      };
      reader.onerror = evt => {
        console.error(evt);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.fileInput input {
  width: 250px;
}
</style>
