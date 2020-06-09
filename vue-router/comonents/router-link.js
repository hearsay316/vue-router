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
