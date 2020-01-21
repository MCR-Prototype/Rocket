<template>
  <div class="ViewDesigner">
    <app-navigation />
    <the-app-header />
    <designer-toolbar
      v-bind:output="logMessage"
      v-bind:resolution="$store.state.profilDesignerWorkarea.resolution"
      v-on:toolbar-button-blicked="execCmd"
      v-on:resolution-changed="updateResolution"
      v-on:file-loaded="loadConfig"
    />
    <div class="workarea-container">
      <designer-palette
        ref="palette"
        v-bind:list-of-components="$store.state.componentsList"
        v-bind:active-component-data="$store.state.activeComponent"
        v-on:add-new-child="addNewChild"
        v-on:update-active-child="updateActiveChild"
      />
      <designer-workarea
        ref="workarea"
        v-bind:child-data="childDataView"
        v-bind:resolution-data="$store.state.profilDesignerWorkarea.resolution"
        v-on:update-child="updateChild"
        v-on:set-active-child="setActiveChild"
      />
    </div>
  </div>
</template>

<script>
import TheAppHeader from "@/components/AppHeader/TheAppHeader";
import DesignerToolbar from "@/components/AppContent/DesignerToolbar/DesignerToolbar";
import AppNavigation from "@/components/AppNavigation/AppNavigation";
import DesignerPalette from "@/components/AppContent/DesignerPallete/designer-palette";
import DesignerWorkarea from "@/components/AppContent/DesignerWorkarea/designer-workarea";

export default {
  name: "ViewDesigner",
  components: {
    DesignerWorkarea,
    DesignerPalette,
    AppNavigation,
    DesignerToolbar,
    TheAppHeader
  },
  computed: {
    logMessage: function() {
      return this.$store.state.logMessage;
    },

    childDataView: function() {
      return this.$store.state.childDataStore;
    }
  },
  data() {
    return {
      fileLoaderVisible: false
    };
  },
  methods: {
    updateResolution: function(resolution) {
      this.$store.commit("changeWorkareaResolution", resolution);
    },
    loadConfig: function(data) {
      this.$store.commit("childDataLoad", data);
    },
    saveConfig: function(fileName) {
      let dataString = JSON.stringify(this.$store.state.childDataStore.childs);

      let tElement = document.createElement("a");
      tElement.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(dataString)
      );
      tElement.setAttribute("download", fileName);
      tElement.style.display = "none";
      document.body.appendChild(tElement);
      tElement.click();
      document.body.removeChild(tElement);
    },
    resetConfig: function() {
      let data = [
        { id: 1, type: "box", message: "Box 1", style: { left: 0, top: 0 } },
        { id: 2, type: "list", message: "Box 2", style: { left: 0, top: 150 } },
        {
          id: 3,
          type: "Button",
          message: "Box 3",
          style: { left: 0, top: 300 }
        }
      ];
      this.$store.commit("childDataLoad", data);
    },
    updateChild: function(data) {
      this.$store.commit("childDataUpdate", data);
    },
    loadApiConfig: function() {
      console.log("---- testConfig -------");
      let data = [];
      this.axios
        .get(this.$store.state.profilDesignerWorkarea.baseURL + "Profiles")
        .then(response => {
          response.data.foreach(function(child) {
            if (child.owner === 2) {
              let entry = {
                id: child.id,
                caption: child.caption,
                type: child.type,
                style: JSON.Parse(child.mcr)
              };
              data.push(entry);
            }
          });

          this.loading = false;
          this.$store.commit("childDataLoad", data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    saveApiConfig: function() {
      // delete Id
      this.$store.state.childDataStore.childs.foreach(function(child) {
        this.axios
          .delete(
            this.$store.state.profilDesignerWorkarea.baseURL +
              "Profiles/" +
              child.id
          )
          .then(() => {})
          .catch(error => {
            console.log("---- Delete Error ----");
            console.log(error);
          });
      });
      // get owner Ids
      let idString = [];
      this.axios
        .get(this.$store.state.profilDesignerWorkarea.baseURL + "Profiles")
        .then(response => {
          response.data.foreach(function(child) {
            if (child.owner === 2) {
              idString.push(child.id);
            }
          });
          console.log("string add----");
          console.log(idString);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });

      // delete owner boxen
      let saveData = [];

      this.$store.state.childDataStore.childs.foreach(function(child) {
        let entry = {
          id: child.id,
          caption: child.caption,
          type: child.type,
          mcr: JSON.stringify(child.style)
        };
        saveData.push(entry);
      });

      this.axios
        .post("http://10.1.4.42:8081/Profiles", saveData)
        .then(() => {})
        .catch(error => {
          console.log("---POST ERROR-----");
          console.log(error);
        });
    },
    setActiveChild: function(data) {
      this.$store.commit("setActiveChild", data);
    },
    addNewChild: function(childType) {
      this.$store.commit("addNewChild", childType);
    },
    updateActiveChild: function(propertyData) {
      this.$store.commit("activeChildUpdate", propertyData);
    },
    testConfig: function() {
      console.log("---- testConfig -------");
      // GET-----------------------------------------------
      let responseGet;
      let headerGet = {
        headers: {
          "Content-Type": "text/plain",
          Accept: "text/plain"
        }
      };
      console.log("------- = GET = -------");
      this.axios
        // .get("https://my-json-server.typicode.com/mcr-prototype/xavir/childdata")
        .get("http://10.1.4.33:8080/Profiles", headerGet)
        .then(response => {
          responseGet = response.data;
          this.loading = false;
          console.log("---GET RESPONSE-----");
          console.log(responseGet);
        })
        .catch(error => {
          console.log("---GET ERROR-----");
          console.log(error);
        });
      // POST-----------------------------------------------
      // console.log("------- = POST = -------");
      // let postData = {
      //   name: "Post Test",
      //   type: 1,
      //   owner: 2,
      //   data: "world domination"
      // };
      // let postHeader = {
      //   // headers: {
      //   //   'Content-Type': "text/plain"
      //   // }
      // };
      // this.axios
      //   .post("http://10.1.4.33:8080/Profiles", postData, postHeader)
      //   .then(() => {})
      //   .catch(error => {
      //     console.log("---POST ERROR-----");
      //     console.log(error);
      //   });
      // console.log("------- = PUT = -------");
      // this.axios
      //   .put("http://10.1.4.33:8080/Profiles/1", {
      //     headers: {
      //       "content-type": "application/json"
      //     },
      //     id: 2,
      //     type: 1,
      //     owner: 2,
      //     data: "testtest"
      //   })
      //   .then(response => {
      //     console.log("---PUT RESPONSE-----");
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log("--- PUT ERROR -----");
      //     console.log(error);
      //   });
    },
    execCmd: function(cmdData) {
      switch (cmdData.command) {
        case "loadConfig":
          this.loadConfig();
          break;
        case "saveConfig":
          this.saveConfig(cmdData.fileName);
          break;
        case "resetConfig":
          this.resetConfig();
          break;
        case "saveApiConfig":
          // this.saveApiConfig();
          break;
        case "loadApiConfig":
          this.loadApiConfig();
          break;
        case "testConfig":
          this.testConfig();
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.workarea-container {
  min-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
