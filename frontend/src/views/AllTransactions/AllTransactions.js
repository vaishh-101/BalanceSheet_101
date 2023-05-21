import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AllTransactions.css'
import TransactionItemCard from '../../components/TransactionItemCard/TransactionItemCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import currentUser from '../../Util/User'
import swal from 'sweetalert'


function AllTransactions() {
  const [transactionItems, setTransactionItems] = useState([])

  useEffect(() => {
    async function loadData() {
      const res = await axios.get('/transactionItem')
      const rps = res.data.data
      rps.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
      setTransactionItems(rps)
    }
    loadData()
    if (currentUser()) { }
    else {
      swal({
        title: 'error!',
        text: 'plzz login to see this page',
        icon: 'error'
      })
      window.location.href = "/login"
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='heading-container'>
        <h1 className='heading'>💰 All Transactions</h1>
      </div>

      <div className='all-transaction-container'>
        {
          transactionItems.map((item, index) => {
            return (
              <TransactionItemCard title={item.title} amount={item.amount} itemType={item.itemType} category={item.category} note={item.note} itemId={item._id} />
            )
          })
        }

      </div>

      <Footer />
    </div>

  )
}

export default AllTransactions