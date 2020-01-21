<template>
  <div class="ViewEditor">
    <app-navigation />
    <the-app-header />
    <img
      src="../components/AppContent/EditorCode/Assets/Under-Construction.png"
      alt="Construction"
    />
    <p>UNDER CONSTRUCTION</p>
  </div>
</template>

<script>
import TheAppHeader from "@/components/AppHeader/TheAppHeader";
import AppNavigation from "@/components/AppNavigation/AppNavigation";
export default {
  name: "ViewEditor",
  components: {
    TheAppHeader,
    AppNavigation
  }
};
</script>

<style lang="scss" scoped>
.ViewEditor {
  p {
    font-size: 5em;
    color: $maincolorgrey;
  }
  img {
    margin-top: 20px;
  }
}
</style>
