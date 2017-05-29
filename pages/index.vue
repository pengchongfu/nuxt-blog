<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/index.css'

import Header from '~components/Header'

@Component
export default class Index extends Vue {
  title = 'nuxt blog'
  render () {
    return (
      <div>
        <Header/>
        <h1 class={ styles.title }>
          { this.title }
        </h1>
      </div>
    )
  }
}
</script>
