import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ children, ...otherProps }) => (
   <button className="custom-button" type="submit">
      {children}
   </button>
)

export default CustomButton