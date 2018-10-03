export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    getParts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
