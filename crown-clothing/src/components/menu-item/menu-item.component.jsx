import React from 'react'
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import "./menu-item.styles.scss"

const MenuItem = ({ history, linkUrl, imageUrl, match, title, size, subtitle }) => {

   MenuItem.propTypes = {
      /* Passed down from Directory Component */

      /*  */
      title: PropTypes.string,

      /*  */
      subtitle: PropTypes.bool
   }

   return (
      <div 
         className={`menu-item ${size}`} 
         onClick={ () => history.push(`${match.url}${linkUrl}`) }
      >
      <div
         className="background-image"
         style={{
            backgroundImage: `url(${imageUrl})`
         }}
      />
         <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>{subtitle}</span>
         </div>
      </div>
   )
}

export default withRouter(MenuItem)