import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/Card.css'

@Component({
  props: {
    title: {
      default: ''
    },
    tag: {
      default: []
    },
    content: {
      default: ''
    }
  }
})
export default class Card extends Vue {
  render () {
    let tag = this.tag.map(item => {
      return (
        <span>{ item }</span>
      )
    })
    return (
      <div class={ styles.card }>
        <div class={ styles.title }>{ this.title }</div>
        <div class={ styles.content }>{ this.content }</div>
        <div class={ styles.tag }>{ tag }</div>
      </div>
    )
  }
}
