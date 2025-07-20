Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    show: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    close() {
      this.triggerEvent('close');
    }
  }
})