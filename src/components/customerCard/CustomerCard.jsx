import React from 'react'

export default function CustomerCard({title,url}) {
  return (
    <div className='customer_card'> 
          <div className='customer_card_image'>
          <img src= {url} alt="" />
          </div>
          <div className='customer_card_text'>
            <h4>{title}</h4>
          </div>
    </div>
  )
}
