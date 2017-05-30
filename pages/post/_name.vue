<template>
  <div>
    <my-header/>
    <div class="container">
      <div v-html="markedContent">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import marked from 'marked'

import Header from '~components/Header'

@Component({
  components: {
    MyHeader: Header
  }
})
export default class Post extends Vue {
  asyncData ({ params }) {
    return import(`../../posts/${params.name}`)
    .then(post => {
      return {
        content: post.content
      }
    })
  }
  get markedContent () {
    return marked(this.content)
  }
}
</script>
