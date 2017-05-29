import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/Header.css'

@Component
export default class Header extends Vue {
  render () {
    return (
      <div>
        <header class={ styles.header }>
          <div class={ `container ${styles.title}` }>
            nuxt blog demo
          </div>
        </header>
      </div>
    )
  }
}
