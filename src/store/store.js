import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//helper functions
function getChildById(childId) {
  let child = store.state.childDataStore.childs.find(function(theChild) {
    return theChild.id === childId;
  });
  return child;
}

const store = new Vuex.Store({
  state: {
    counter: 0,
    logMessage: "Log Message",
    componentsList: [
      { id: 1, type: "box", name: "Box", icon: "1" },
      { id: 2, type: "list", name: "List", icon: "1" },
      { id: 3, type: "text", name: "Text", icon: "1" },
      { id: 4, type: "edit", name: "Edit", icon: "1" },
      { id: 5, type: "button", name: "Button", icon: "1" },
      { id: 6, type: "Label", name: "Label", icon: "1" }
    ],
    activeComponent: {
      id: 1,
      type: "GuiBox",
      message: "Box 1",
      style: { left: 1, top: 2 }
    },
    childDataStore: {
      childs: [
        {
          id: 1,
          type: "GuiBox",
          message: "box:Box 1",
          style: { left: 0, top: 0, backgroundColor: "red" }
        },
        {
          id: 2,
          type: "GuiList",
          message: "list:Box 2",
          style: { left: 0, top: 150, backgroundColor: "blue" }
        },
        {
          id: 3,
          type: "GuiButton",
          message: "button:Box 3",
          style: { left: 0, top: 300, backgroundColor: "yellow" }
        }
      ]
    },
    profilDesignerWorkarea: {
      baseURL: "http://10.1.4.33:8080/",
      resolution: {
        width: 1233,
        height: 666
      }
    },
    appData: {
      uniqueObjectId: 0,
      userName: "Max Mustermann",
      lizent: "develober",
      securityToken: "1234"
    }
  },
  mutations: {
    incrementUnicId: function(state) {
      state.uniqueObjectId++;
    },
    changeLogMessage: function(state, payload) {
      state.logMessage = payload;
    },
    changeWorkareaResolution: function(state, payload) {
      state.profilDesignerWorkarea.resolution.width = payload.width;
      state.profilDesignerWorkarea.resolution.height = payload.height;
    },
    childDataLoad: function(state, payload) {
      state.childDataStore.childs = payload;
    },
    childDataUpdate: function(state, payload) {
      let child = getChildById(payload.id);

      child.style.top = payload.top;
      child.style.left = payload.left;
    },
    activeChildUpdate: function(state, payload) {
      let child = getChildById(this.state.activeComponent.id);
      console.log(">>>> ---- activeChildUpdate ----");
      console.log("KEy: " + payload.key + " Value: " + payload.value);

      child.style[payload.key] = payload.value;
      child = Object.assign({}, child);
      // Vue.set(state.customers, 0, { Id: 0, IsModified: true })
      console.log(child);
      console.log("<<<< ---- activeChildUpdate ----");
      let index = this.state.childDataStore.childs.findIndex(
        theChild => theChild.id === child.id
      );
      Vue.set(this.state.childDataStore.childs, index, child);
    },
    setActiveChild: function(state, payload) {
      this.state.activeComponent = getChildById(payload);
    },
    addNewChild: function(state, payload) {
      let tLen = this.state.childDataStore.childs.length + 1;
      let tNewBox = {
        id: tLen,
        type: payload,
        message: payload + ":Box " + tLen,
        style: {
          left: 0,
          top: 300
        }
      };
      this.state.childDataStore.childs.push(tNewBox);
    }
  },
  actions: {},
  modules: {}
});

export default store;
