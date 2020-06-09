export default {
  name: "router-link",
  props: {
    to: {
      required: true,
      type: String,
    },
    tag: {
      type: String,
    },
  },
  methods: {
    handleClickPush() {
      console.log("5555", this.to, this);
      this.$router.push(this.to);
    },
  },
  render(h) {
    let tag = this.tag || "a";
    return h(
      tag,
      {
        on: {
          click: this.handleClickPush,
        },
      },
      this.$slots.default
    );
  },
};
