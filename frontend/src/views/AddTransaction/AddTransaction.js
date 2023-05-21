import React, { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import './AddTransaction.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import currentUser from '../../Util/User'




function AddTransaction() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [itemType, setItemType] = useState("receivable")
    const [note, setNote] = useState("")
    const [category, setCategory] = useState("other")

    useEffect(() => {
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

    async function addTransactionItem() {
        const response = await axios.post("/transactionItem", {
            title: title,
            amount: amount,
            itemType: itemType,
            note: note,
            category: category
        })
        console.log(response.data)

        setTitle("")
        setAmount("")
        setItemType("")
        setNote("")
        setCategory("")

        if (response.data.status === true) {
            swal({
                title: 'success!',
                text: "Transaction add successfully🤗...",
                icon: 'success'
            })
        }
        else {
            swal({
                title: 'error!',
                text: response.data.message,
                icon: 'error'
            })
        }
    }
    return (
        <div>
            <Navbar />
            <div className='heading-container'>
                <h1 className='heading'>💰 Add Transaction</h1>
            </div>
            <div className='form-container'>
                <form>
                    <div>
                        <input className='form-input'
                            type='text' placeholder='Enter Title' value={title}
                            onChange={(e) => { setTitle(e.target.value) }} required />
                    </div>

                    <div>
                        <input className='form-input'
                            type='text' placeholder='Enter Amount' value={amount}
                            onChange={(e) => { setAmount(e.target.value) }} required />
                    </div>

                    <div className='rp-radio-container'>
                        <span ><input className='rp-radio' type='radio' value='receivable' name='rp' onClick={(e) => { setItemType(e.target.value) }} checked={itemType === "receivable"} />Receivable</span>
                        <span><input className='rp-radio' type='radio' value='payable' name='rp' onClick={(e) => { setItemType(e.target.value) }} checked={itemType === "payable"} />Payable</span>
                    </div>

                    <div>
                        <input className='form-input'
                            type='text' placeholder='Note' value={note}
                            onChange={(e) => { setNote(e.target.value) }} required />
                    </div>

                    <div>
                        <select className='form-input' value={category} onChange={(e) => { setCategory(e.target.value) }} >
                            <option value='grocery'>🛒Grocery</option>
                            <option value='shopping'>🛍️ Shopping</option>
                            <option value='courses'>📚Courses</option>
                            <option value='food'>🍕Food</option>
                            <option value='travling'>🧳Travling</option>
                            <option value='other'>💳Other</option>
                            <option value='salary'>💵Salary</option>
                        </select>
                    </div>

                    <div className='btn-add-transaction-container'>
                        <button className='btn-add-transaction'
                            type="button" onClick={addTransactionItem}>Add Transaction</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddTransaction