new Vue({
  el: '#exercise',
  data: {
    startedffect: false,
    classesArray: [{ customOne: true }, { customTwo: false }],
    color: 'customTwo',
    styleClasses: 'fushia',
    width: 0,
    height: 0
  },

  computed: {
    alternateClass: function () {
      return {
        highlight: this.startedffect,
        shrink: !this.startedffect
      }
    },
    myStyle: function () {
      return {
        backgroundColor: this.styleClasses,
        width: 100 + 'px',
        height: 100 + 'px'
      }
    },
    proessBar: function () {
      return {
        backgroundColor: 'firebrick',
        width: this.width +'px',
        height: this.height +'px'
      }
    }
  },
  methods: {
    startEffect: function () {

      setInterval(function () {
        console.log(this.alternateClass);
        this.startedffect = !this.startedffect;

      }.bind(this), 2000);
    },

    startProgress: function () {

      this.height = 20;

      setInterval(function () {
        console.log('progress bar', this.width);
        if (this.width === 100) return;
        this.width += 10;

      }.bind(this), 2000);
    }
  }
});
