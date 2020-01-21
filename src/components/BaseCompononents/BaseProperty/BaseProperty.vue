<template>
  <div class="property">
    <label>
      {{ propertyName }}
      <input
        v-bind:type="propertyType"
        v-bind:value="propertyValue"
        v-on:change="propertyChanged"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseProperty",
  props: {
    propertyName: String,
    propertyValue: [String, Number]
  },
  data() {
    return {
      propertyType: "text"
    };
  },
  created: function() {
    this.propertyType = typeof this.propertyValue;
    console.log("InputType = " + this.propertyType);
  },
  methods: {
    propertyChanged: function(event) {
      let value = event.target.value;
      let key = this.propertyName;
      let propertyData = { key, value };
      this.$emit("update-property", propertyData);
    }
  }
};
</script>

<style lang="scss" scoped>
.property {
  background-color: $maincolorgrey2;
  height: 20px;
  color: $maincolorgrey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

  input {
    width: 40px;
    margin-left: 10px;
  }
}
</style>
