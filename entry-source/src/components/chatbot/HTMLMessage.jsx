import React from "react";

/**
 * HTMLMessage widget for rendering bot responses with HTML content
 */
const HTMLMessage = (props) => {
  const htmlContent = props.payload || props.message || "";
  
  return (
    <div 
      className="html-message-widget"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HTMLMessage;
