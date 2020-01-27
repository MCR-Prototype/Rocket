<template>
  <div>
    <app-navigation />
    <div v-if="currentSelection">
      <p>Name: {{ currentSelection.Name }}</p>
      <p>Straße: {{ currentSelection.Street }}</p>
      <p>PLZ: {{ currentSelection.CityCode }}</p>
      <p>Stadt: {{ currentSelection.CityName }}</p>
      <p>Telefon: {{ currentSelection.Phone }}</p>
    </div>
    <DxDataGrid
      :data-source="dataSource"
      :show-borders="true"
      :remote-operations="true"
      :selection="{ mode: 'multiple' }"
      :hover-state-enabled="true"
      @selection-changed="onSelectionChanged"
    >
      <DxEditing :allow-updating="true" mode="form" />
      <DxColumn data-field="Id" caption="ID" data-type="number" />
      <DxColumn data-field="Name" caption="Name" data-type="string" />
      <DxColumn data-field="Street" caption="Straße" data-type="string" />
      <DxColumn data-field="CityCode" caption="PLZ" data-type="number" />
      <DxColumn data-field="CityName" caption="Stadt" data-type="string" />
      <DxColumn
        data-field="Phone"
        caption="Tel. Nr."
        data-type="string"
        :header-filter="{ allowSearch: true }"
      />
      <DxPaging :page-size="3" />
      <DxPager
        :show-page-size-selector="true"
        :allowed-page-sizes="[3, 5, 10, 100, 1000]"
      />
    </DxDataGrid>
  </div>
</template>

<script>
  import "devextreme/data/odata/store";
  import AppNavigation from "@/components/AppNavigation/AppNavigation";
  import {DxColumn, DxDataGrid, DxEditing, DxPager, DxPaging} from "devextreme-vue/data-grid";
  import CustomStore from "devextreme/data/custom_store";
  import "whatwg-fetch";

  function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== "";
}

const store = new CustomStore({
  key: "Id",
  load: function(loadOptions) {
    loadOptions.$top = loadOptions.take;
    loadOptions.$skip = loadOptions.skip;
    loadOptions.$count = true;
    let params = "?";
    [
      "$skip",
      "$count",
      // 'take',
      // 'requireTotalCount',
      "requireGroupCount",
      "sort",
      "filter",
      "totalSummary",
      "group",
      "groupSummary",
      "$top"
    ].forEach(function(i) {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) {
        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
      }
    });
    params = params.slice(0, -1);
    return (
      fetch(`http://10.1.4.33:8081/TestStores${params}`)
        // return fetch(`https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders${params}`)
        .then(response => response.json())
        .then(data => {
          return {
            data: data.value,
            totalCount: data["@odata.count"]
            // summary: data.summary,
            // groupCount: data.groupCount
          };
        })
        .catch(() => {
          throw "Data Loading Error";
        })
    );
  }
});

export default {
  components: {
    AppNavigation,
    DxDataGrid,
    DxColumn,
    DxPager,
    DxPaging,
    DxEditing
  },
  data() {
    return {
      dataSource: store,
      currentSelection: null
    };
  },
  methods: {
    onSelectionChanged: function(selectionData) {
      let data = selectionData.selectedRowsData[0];
      this.currentSelection = data;
    }
  }
};
</script>

<style scoped></style>
