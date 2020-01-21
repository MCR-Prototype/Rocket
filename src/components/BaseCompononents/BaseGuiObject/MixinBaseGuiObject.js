// mixin
const baseGuiMixin = {
  props: {
    boxData: Object,
    dragEndData: Object
  },
  data() {
    return {
      styleProperty: {
        position: "absolute",
        top: "0px",
        left: "0px"
      },

      mouseOffset: {
        posX: 0,
        posY: 0
      }
    };
  },
  watch: {
    boxData: function() {
      this.styleProperty.left = this.boxData.style.left + "px";
      this.styleProperty.top = this.boxData.style.top + "px";
      this.styleProperty.backgroundColor = this.boxData.style.backgroundColor;
    }
  },

  created: function() {
    this.styleProperty.left = this.boxData.style.left + "px";
    this.styleProperty.top = this.boxData.style.top + "px";
    this.styleProperty.backgroundColor = this.boxData.style.backgroundColor;
  },

  methods: {
    dragStart: function(event) {
      event.dataTransfer.setData("Text/plain", event.target.id);

      this.mouseOffset.posX = event.offsetX;
      this.mouseOffset.posY = event.offsetY;
    },

    dragging: function() {
      //todo something
    },

    dragEnd: function() {
      let posX = this.dragEndData.x;
      let posY = this.dragEndData.y;

      posX -= this.mouseOffset.posX;
      posY -= this.mouseOffset.posY;
      this.styleProperty.top = posY + "px";
      this.styleProperty.left = posX + "px";
      let data = {
        id: this.boxData.id,
        top: posY,
        left: posX
      };
      this.$emit("update-child-data", data);
    },
    setActive: function() {
      console.log("Click Box Id:" + this.boxData.id);
      this.$emit("set-child-active", this.boxData.id);
    }
  }
};
export default baseGuiMixin;
