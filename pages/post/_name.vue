<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import marked from 'marked'

@Component
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
  render () {
    return (
      <div domPropsInnerHTML={ this.markedContent }>
        post
      </div>
    )
  }
}
</script>
