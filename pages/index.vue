<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

import styles from '~assets/index.css'

import Header from '~components/Header'
import Card from '~components/Card'

import meta from '~posts/meta'

@Component
export default class Index extends Vue {
  title = 'nuxt blog'
  render () {
    let cards = meta.map(item => {
      return (
        <div class="col-md-4">
          <nuxt-link to={ `/post/${item.name}/` }><Card title={ item.title } tag={ item.tag } content={ item.content }/></nuxt-link>
        </div>
      )
    })
    return (
      <div>
        <Header/>
        <div class={ `container ${styles.body}` }>
          <div class="row">
            { cards }
          </div>
        </div>
      </div>
    )
  }
}
</script>
