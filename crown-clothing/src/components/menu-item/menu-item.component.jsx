import React from 'react'
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import "./menu-item.styles.scss"

const MenuItem = ({ history, imageUrl, linkUrl, match, size, subtitle, title }) => {

   MenuItem.propTypes = {
      /* Available via withRouter
         Used to navigate to a dynamic route */
      history: PropTypes.object,

      /* Passed down from Directory Component
         Supplies background image url */
      imageUrl: PropTypes.string,

      /* Passed down from Directory Component
         Provides the text to dynamically create a path for history.push() */
      linkUrl: PropTypes.string,

      /* Passed down from Directory Component
         Provides the text for the subtitle */
      subtitle: PropTypes.string,

      /* Passed down from Directory Component
         Provides the text for the h1 title */
      title: PropTypes.string
   }

   return (
      <div
         className={`menu-item ${size}`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
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