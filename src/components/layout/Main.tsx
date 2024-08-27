import React from 'react'

interface Props {
    children: any
}

function Main({children}: Props) {
  return (
    <main className='main'>
        {children}
    </main>
  )
}

export default Main