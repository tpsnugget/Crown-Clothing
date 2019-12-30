import React, { Component } from "react"
import "./directory.styles.scss"
import { MenuItem } from "../../components/menu-item/menu-item.component"

class Directory extends Component {

   constructor(props) {
      super(props)
      this.state = {
         section: [
            {
               title: 'hats',
               imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
               id: 1
            },
            {
               title: 'jackets',
               imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
               id: 2
            },
            {
               title: 'sneakers',
               imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
               id: 3
            },
            {
               title: 'womens',
               imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
               size: 'large',
               id: 4,
            },
            {
               title: 'mens',
               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: 5
            }
         ]
      }
   }

   render() {

      return (
         <div className='directory-menu'>
            {this.state.section.map( ({id, imageUrl, size, title }) => (
               <MenuItem imageUrl={imageUrl} key={id} size={size} subtitle="SHOP NOW" title={title.toUpperCase()} />
            ) )}
         </div >
      )
   }
}

export default Directory