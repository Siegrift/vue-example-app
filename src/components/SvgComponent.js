import Vue from 'vue'

// this is interesting only in IE where there is no innerHTML on svg node
const vue = new Vue({
  el: '#svg',
  methods: {
    updateInnerHTML() {
      // This doesn't work because delete doesn't delete on prototype chain
      // delete document.getElementById('unsafeDiv').innerHTML;

      // this changes the vue value as well
      document.getElementById('svgId').innerHTML += '<text x="20" y="20" font-family="sans-serif" font-size="10px" fill="red">unsafe svg!</text>';
    }
  },
  render(createElement) {
    const unsafeHtml = createElement('svg', {
      attrs: {
        id: 'svgId'
      },
      domProps: {
        innerHTML: '<text x="20" y="20" font-family="sans-serif" font-size="10px" fill="red">unsafe svg!</text>',
      },
    });

    const button = createElement('button', {
      on: {
        click: this.updateInnerHTML
      }
    }, 'Update inner html');
    
    return createElement('div', [
      unsafeHtml, button,
    ])
  }
});

export default vue