<template>
  <div>
    <app-navigation />
    <dx-chart :data-source="data">
      <dx-argument-axis :tick-interval="10" />
      <dx-series type="bar" />
      <dx-legend :visible="false" />
    </dx-chart>
    <dx-data-grid
      :data-source="dataSource"
      :remote-operations="false"
      :allow-column-reordering="true"
      :row-alternation-enabled="true"
      :show-borders="true"
      @content-ready="onContentReady"
    >
      <dx-column :group-index="0" data-field="Product" />
      <dx-column
        data-field="Amount"
        caption="Sale Amount"
        data-type="number"
        format="currency"
        alignment="right"
      />
      <dx-column
        :allow-grouping="false"
        data-field="Discount"
        caption="Discount %"
        data-type="number"
        format="percent"
        alignment="right"
        cell-template="discountCellTemplate"
        css-class="bullet"
      />
      <dx-column data-field="SaleDate" data-type="date" />
      <dx-column data-field="Region" data-type="string" />
      <dx-column data-field="Sector" data-type="string" />
      <dx-column data-field="Channel" data-type="string" />
      <dx-column :width="150" data-field="Customer" data-type="string" />

      <dx-group-panel :visible="true" />
      <dx-search-panel :visible="true" :highlight-case-sensitive="true" />
      <dx-grouping :auto-expand-all="false" />
      <dx-pager
        :allowed-page-sizes="pageSizes"
        :show-page-size-selector="true"
      />
      <dx-paging :page-size="10" />
      <template #discountCellTemplate="{ data: cellData }">
        <discount-cell :cell-data="cellData" />
      </template>
    </dx-data-grid>
  </div>
</template>

<script>
import DxChart, {
  DxArgumentAxis,
  DxSeries,
  DxLegend
} from "devextreme-vue/chart";

import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxPager,
  DxPaging,
  DxSearchPanel
} from "devextreme-vue/data-grid";

import AppNavigation from "@/components/AppNavigation/AppNavigation";

import DataSource from "devextreme/data/data_source";
import "devextreme/data/odata/store";
import DiscountCell from "../components/DevExpress/DiscountCell";

let collapsed = false;

export default {
  components: {
    AppNavigation,
    DxChart,
    DxArgumentAxis,
    DxSeries,
    DxLegend,
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DiscountCell
  },
  data() {
    return {
      data: [
        {
          arg: 1990,
          val: 5320816667
        },
        {
          arg: 2000,
          val: 6127700428
        },
        {
          arg: 2010,
          val: 6916183482
        }
      ],
      dataSource: new DataSource({
        store: {
          type: "odata",
          url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
          beforeSend: function(request) {
            request.params.startDate = "2018-05-10";
            request.params.endDate = "2018-05-15";
          }
        }
      }),
      pageSizes: [10, 25, 50, 100],
      onContentReady: function(e) {
        if (!collapsed) {
          e.component.expandRow(["EnviroCare"]);
          collapsed = true;
        }
      }
    };
  }
};
</script>
