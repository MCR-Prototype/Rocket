<template>
  <div>
    <app-navigation></app-navigation>
    <ejs-grid
      :dataSource="data"
      :allowPaging="true"
      :pageSettings="pageOptions"
      :allowSorting="true"
    >
      <e-columns>
        <e-column
          field="Id"
          headerText="ID"
          textAlign="Right"
          width="50"
        ></e-column>
        <e-column field="Name" headerText="Name" width="120"></e-column>
        <e-column
          field="Street"
          headerText="Straße"
          textAlign="Right"
          width="90"
        ></e-column>
        <e-column
          field="CityName"
          headerText="Ort"
          textAlign="Right"
          width="90"
        ></e-column>
        <e-column
          field="CityCode"
          headerText="PLZ"
          textAlign="Right"
          width="90"
        ></e-column>
        <e-column
          field="Phone"
          headerText="Tel."
          textAlign="Right"
          width="90"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
  import AppNavigation from "@/components/AppNavigation/AppNavigation";
  import {Page, Sort} from "@syncfusion/ej2-vue-grids";
  import {DataManager, ODataV4Adaptor} from "@syncfusion/ej2-data";

  class RocketAdaptor extends ODataV4Adaptor {
  processResponse() {
    let original = super.processResponse.apply(this, arguments);
    console.log("Response Original: ", original);
    return { result: original.result, count: original.count };
  }
}

export default {
  name: "ViewSyncFusionGridTesting",
  components: {
    AppNavigation
  },
  data() {
    return {
      // data: [
      //   { OrderID: 10248, CustomerID: "VINET", Freight: 32.38 },
      //   { OrderID: 10249, CustomerID: "TOMSP", Freight: 11.61 },
      //   { OrderID: 10250, CustomerID: "HANAR", Freight: 65.83 },
      //   { OrderID: 10251, CustomerID: "VICTE", Freight: 41.34 },
      //   { OrderID: 10252, CustomerID: "SUPRD", Freight: 51.3 },
      //   { OrderID: 10253, CustomerID: "HANAR", Freight: 58.17 },
      //   { OrderID: 10254, CustomerID: "CHOPS", Freight: 22.98 },
      //   { OrderID: 10255, CustomerID: "RICSU", Freight: 148.33 },
      //   { OrderID: 10256, CustomerID: "WELLI", Freight: 13.97 }
      // ],
      data: new DataManager({
        url: "http://10.1.4.33:8081/TestStores/",
        adaptor: new RocketAdaptor(),
        crossDomain: true
      }),
      pageOptions: {
        pageSize: 2,
        pageSizes: [3, 5, 10, 100, 1000],
        pageCount: 4
      }
    };
  },
  provide: {
    grid: [Page, Sort]
  }
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
