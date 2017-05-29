<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/index.css'

@Component
export default class Index extends Vue {
  title = 'nuxt blog'
  render () {
    return (
      <div>
        <h1 class={ styles.title }>
          { this.title }
        </h1>
      </div>
    )
  }
}
</script>
