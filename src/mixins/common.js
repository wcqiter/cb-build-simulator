const common = {
  methods: {
    deepCopy(ob) {
      return JSON.parse(JSON.stringify(ob));
    },
    uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
  },
  computed: {
    lang() {
      return [
        {
          value: 'zh',
          text: '繁中'
        },
        {
          value: 'en',
          text: 'ENG'
        },
        {
          value: 'jp',
          text: '日本語',
          disabled: false
        }
      ]
    },
  },
}

export {common}
