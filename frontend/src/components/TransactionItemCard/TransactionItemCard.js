import React from 'react'
import './TransactionItemCard.css'
import axios from 'axios';

function TransactionItemCard({ title, amount, itemType, category, note, itemId }) {

  async function deleteTransactionItem() {
    const response = await axios.post('/deleteTransactionItem', {
      itemId: itemId
    })
    window.location.reload()
  }


  return (
    <div className={`transaction-item-card-container  ${itemType}`} >
      <div className='transaction-item-card-title'>
        <span> {title} </span>
        <span> {amount} </span>
      </div>
      <div className='transaction-item-card-details'>
        <span>{note}</span>
        <span className='category-badge'>{category}</span>
      </div>
      <span className='delete-button' onClick={deleteTransactionItem}>
        🗑️
      </span>
    </div>
  )
}

export default TransactionItemCard;