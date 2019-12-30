import React from "react"
import "./collection-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ items, title }) => (

   
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
         {items.filter( (item, i) => i < 4 ).map( ({ id, ...remainintItem }) => <CollectionItem key={id} {...remainintItem} /> )}
      </div>
   </div>
)

export default CollectionPreview