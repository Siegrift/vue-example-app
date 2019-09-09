import Vue from 'vue'

const vue = new Vue({
  el: '#fnc',
  methods: {
    clearInnerHTML() {
      // This doesn't work because delete doesn't delete on prototype chain
      // delete document.getElementById('unsafeDiv').innerHTML;

      // this changes the vue value as well
      document.getElementById('unsafeDiv').innerHTML = '';
    }
  },
  render(createElement) {
    const unsafeHtml = createElement('div', {
      attrs: {
        id: "unsafeDiv"
      },
      domProps: {
        innerHTML: '<b>domProps inner html</b>',
      },
    });

    const button = createElement('button', {
      on: {
        click: this.clearInnerHTML
      }
    }, 'Clear inner html');
    
    return createElement('div', [
      unsafeHtml, button
    ])
  }
});

export default vue