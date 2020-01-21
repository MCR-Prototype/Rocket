<template>
  <div id="app">
    <app-navigation />
    <md-card>
      <md-card-header>
        <div class="md-title">Material Design with Vue.js 2 Demo</div>
        <div class="md-subhead">by CodingTheSmartWay.com</div>
      </md-card-header>
      <md-card-content>
        <md-button class="md-raised md-primary" v-on:click="fillTable()"
          >Fill table</md-button
        >
        <md-button class="md-raised md-primary" v-on:click="clearTable()"
          >Clear table</md-button
        >
        <br />
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>First name</md-table-head>
              <md-table-head>Last name</md-table-head>
              <md-table-head>Email</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <!--            <md-table-row v-for="contact in contacts">-->
            <!--              <md-table-cell>{{ contact.firstname }}</md-table-cell>-->
            <!--              <md-table-cell>{{ contact.lastname }}</md-table-cell>-->
            <!--              <md-table-cell>{{ contact.email }}</md-table-cell>-->
            <!--              </md-table-row>-->
          </md-table-body>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation/AppNavigation";

export default {
  name: "ViewScriptEditor",
  components: {
    AppNavigation
  }
};
</script>
