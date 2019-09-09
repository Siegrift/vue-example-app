<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p> -->
    <!-- <h3>Installed CLI Plugins</h3>
    
    <!-- v-html directive -->
    <div v-html="rawVHtml"></div>
    <div v-html="safeVHtml"></div>

    <!-- html interpolation is safe because it's put into DOM as text node -->
    <div>{{rawInterHtml}}</div>
    <div>{{safeInterHtml}}</div>

    <!-- directly write into innerHTML only writes attribute (so it's safe) -->
    <div :innerHTML="rawInnerHtml"></div>
    <div :innerHTML="safeInnerHtml"></div>
    
    <!-- attribute interpolation -->
    <iframe :srcdoc="rawSrcdocHtml"></iframe>
    <iframe :srcdoc="safeSrcdocHtml"></iframe>

    <!-- on* events -->
    <div>
      <button :onclick="rawOnHandler">insecure btn</button>
      <button :onclick="safeOnHandler">secure btn</button>
    </div>

    <!-- script tags causes compile errors -->
    <!-- <script>{{scriptBody}}</script> -->

    <!-- set and remove inner html -->
    <div>
      <span v-html="hideInnerHtml ? undefined: conditionalSafeVHtml"></span>
      <button v-on:click="hideInnerHtml = !hideInnerHtml">Toggle innerHTML!</button>
    </div>

    <div>
      <svg v-html="rawSvgHtml"></svg>
      <svg v-html="safeSvgHtml"></svg>
    </div>
  </div>
</template>

<script>
const p = TrustedTypes.createPolicy('vue-app', {createHTML: (s) => s, createURL: (s) => s, createScript: (s) => s});
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      rawVHtml: '<b>unsafe v-html</b>',
      safeVHtml: p.createHTML('safe v-html'),
      rawInnerHtml: '<b>unsafe inner html</b>',
      safeInnerHtml: p.createHTML('safe inner html'),
      rawInterHtml: '<img src=x onerror="alert(0)">',
      safeInterHtml: p.createHTML('safe interpolated html'),
      rawSrcdocHtml: '<b>unsafe srcdoc html</b>',
      safeSrcdocHtml: p.createHTML('safe srcdoc html'),
      hideInnerHtml: false,
      rawOnHandler: "console.log('inscure onclick')",
      safeOnHandler: p.createScript("console.log('secure onclick')"),
      scriptBody: 'console.log("script body")',
      conditionalSafeVHtml: p.createHTML('safe condit html'),
      rawSvgHtml: '<text x="20" y="20" font-family="sans-serif" font-size="20px">unsafe svg!</text>',
      safeSvgHtml: p.createHTML('<text x="20" y="20" font-family="sans-serif" font-size="20px">safe svg</text>'),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
