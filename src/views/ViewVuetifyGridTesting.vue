<template>
  <div>
    <app-navigation />
    <v-data-table
      v-model="selected"
      :headers="dataHeaders"
      :items="dataItems"
      :single-select="singleSelect"
      @page-count="test"
      item-key="name"
      show-select
    >
    </v-data-table>
  </div>
</template>
<script>
  import AppNavigation from "@/components/AppNavigation/AppNavigation";
  // testing vuetify testing axios as webapi
  import RocketOdataService from "@/ApiService/RocketOdataService";

  export default {
  components: {
    AppNavigation
  },
  name: "ViewVuetifyGrid",
  data() {
    return {
      singleSelect: false,
      selected: [],
      myPageSize: 10,
      dataHeaders: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "Id"
        },
        { text: "Name", value: "Name" },
        { text: "Straße", value: "Street" },
        { text: "Ort", value: "CityName" },
        { text: "PLZ", value: "CityCode" },
        { text: "Tel.", value: "Phone" }
      ],
      dataItems: []
    };
  },
  mounted() {
    this.ApiService = new RocketOdataService("http://10.1.4.33:8081/");
    // let response = this.ApiService.getEntrys("TestStores");
    this.ApiService.getEntrys("TestStores").then(data => {
      this.dataItems = data.value;
      console.log("Mounted Response:");
    });
    console.log("Mounted One:");
  },
  methods: {
    test: function(arg) {
      console.log("TEST", arg);
    }
  }
};
</script>

<style scoped>
.box {
  background-color: green;
  width: 100px;
  height: 100px;
}
</style>
