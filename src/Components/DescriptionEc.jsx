import React from "react";
import { useState } from "react"

const DescriptionEC = ({ description }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
  
    const truncateDescription = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
  
      const truncatedText = text.slice(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.slice(0, lastSpaceIndex) + " ...";
    };
  
    const truncatedDescription = truncateDescription(description, 400);
    const showTruncateButton = description.length > 400;
  
    return (
      <div>
        <p>
          {expanded ? (
            <>
              {description}
              {showTruncateButton && (
                <button
                  className="text-blue-500 underline ml-1"
                  onClick={toggleExpanded}
                >
                  View less
                </button>
              )}
            </>
          ) : (
            <>
              {truncatedDescription}
              {showTruncateButton && (
                <button
                  className="text-blue-500 underline ml-1"
                  onClick={toggleExpanded}
                >
                  View more
                </button>
              )}
            </>
          )}
        </p>
      </div>
    );
  };
  
  export default DescriptionEC;