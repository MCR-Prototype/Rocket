<template>
  <div class="title">
    <img src="./Assets/logo_v2.png" alt="Logo" /><span>C16 Prototype</span>
  </div>
</template>

<script>
export default {
  name: "TheAppHeader"
};
</script>

<style lang="scss" scoped>
.title {
  background-color: $maincolorgrey;
  display: flex;
  justify-content: flex-start;
  height: 100px;

  img {
    margin-left: 1%;
    height: 100%;
    width: auto;
  }

  span {
    color: white;
    font-size: 4vw;
    font-weight: bolder;
    font-family: "Xolonium";
    line-height: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 15px;
  }
}
</style>
