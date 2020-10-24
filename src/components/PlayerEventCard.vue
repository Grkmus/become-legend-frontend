<style>
h5 {
    font-size: 1.0rem;
}
</style>

<script>

export default {
  name: 'playerEventCard',
  props: ['data'],
  methods: {
    // captainSelectPlayer: function() {
    //     this.$emit('handleSelect', this.data._id)
    // },
    goToPlayer(_id) {
      this.$router.push({
        name: 'player',
        params: { id: _id },
      });
    },
  },
};
</script>
