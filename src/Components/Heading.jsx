import React from 'react'

const Heading = ({ className,text }) => {
  let textColor = text
    .replace("#", "<span class='one'>")
    .replace("#", "</span>");

  return <h1 className={`font-extrabold font-openSan text-[72px] w-[686px] ${className}`} dangerouslySetInnerHTML={{ __html: textColor }}></h1>;
};

export default Heading