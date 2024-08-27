import React from 'react'

interface Props {
    children : any;
}

function Footer({children}: Props) {
  return (
    <footer>{children}</footer>
  )
}

export default Footer