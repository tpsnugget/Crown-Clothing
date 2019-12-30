import React from 'react'
import PropTypes from "prop-types"
import "./menu-item.styles.scss"

export const MenuItem = ({ title, size, subtitle, imageUrl }) => {

   MenuItem.propTypes = {
      /* Passed down from Directory Component */

      /*  */
      title: PropTypes.string,

      /*  */
      subtitle: PropTypes.bool
   }

   return (
      <div className={`menu-item ${size}`}>
      <div
         className="background-image"
         style={{
            backgroundImage: `url(${imageUrl})`
         }}
      />
         <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>{subtitle}</span>
         </div>
      </div>
   )
}
