import React from 'react';
import { Link } from 'react-router-dom'

const Code = (
  {
    children,
    tag = "div",
    attributes = []
  }
) => {
  let attrList;
  if (attributes.length) {
    attributes.forEach((attr) => {
      console.log(attr);
    })
  }

  return (
    <div className="Code">
      {'<'}
      <span className="Code--tag">{tag + ' '}</span>
      <span className="Code--attrName">{'class'}</span>
      {'="'}
      <span className="Code--attrVal">{'Text--display-1'}</span>
      {'">'}
      <span className="Code--content">{children}</span>
      {'</'}
      <span className="Code--tag">{tag}</span>
      {'>'}
    </div>
  )
}

export default Code;