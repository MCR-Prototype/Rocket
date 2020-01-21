<template>
  <div class="error-page">
    <div class="error-content">
      <img class="error-image" src="./Assets/face.png" alt="Logo" />
      <div class="error-text">
        <p class="error-code">404</p>
        <p class="error-message">Page Not Found</p>
      </div>
    </div>
    <div class-footer>
      <img class="error-logo" src="./Assets/Logo.png" alt="Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
.error-page {
  margin-top: 150px;
  display: flex;
  background-color: $maincolorgrey;
  flex-direction: column;
  padding: 50px;
}

.error-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: $maincolorgrey;
  padding: 50px;
}

.error-image {
  width: 300px;
  height: 300px;
}

.error-text {
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
}

.error-code {
  font-size: 10vw;
  line-height: 10vw;
  color: white;
  margin: 0px;
  text-align: right;
}

.error-message {
  font-size: 5vw;
  line-height: 5vw;
  margin: 0px;
  text-align: right;
  color: white;
}
.error-logo {
  alignment: right;
  width: 150px;
}
</style>
