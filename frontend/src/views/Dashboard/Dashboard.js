import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.css'
import TransactionItemCard from '../../components/TransactionItemCard/TransactionItemCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import currentUser from '../../Util/User'
import swal from 'sweetalert'

function Dashboard() {
  const [transactionItems, setTransactionItems] = useState([])
  const [totalReceivable, setTotalReceivable] = useState(0)
  const [totalPayable, setTotalPayable] = useState(0)
  const [totalBalance, setTotalBalance] = useState(0)

  useEffect(() => {
    async function loadData() {
      const res = await axios.get('/transactionItem')
      const rps = res.data.data
      rps.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
      setTransactionItems(rps.slice(0,10))
  
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


  useEffect(() => {
    async function loadData() {
      const res = await axios.get('/calculations')
      setTotalReceivable(res.data.totalReceivable)
      setTotalPayable(res.data.totalPayable)
      setTotalBalance(res.data.totalBalance)
    }
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='heading-container'>
        <h1 className='heading'>Dashboard</h1>

      </div>
      <div className='row'>
        <div className='col-md-7'>
          <div className='transaction-items-container'>
            {
              transactionItems.map((item, index) => {
                return (
                  <TransactionItemCard title={item.title} amount={item.amount} itemType={item.itemType} category={item.category} note={item.note} itemId={item._id} />
                )
              })
            }
          </div>
        </div>
        <div className='col-md-5'>
          <div className='calculations-container'>
            <div className='calculation-card text-receivable'>₹ {totalReceivable}</div>
            <div className='calculation-card text-payable '>₹ {totalPayable}</div>
          </div>

          <div className='total-calculations'>
            <p className='total-calculation-title'>Total Balance</p>
            ₹ {totalBalance}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Dashboard