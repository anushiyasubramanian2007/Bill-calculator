import { useState } from 'react'

function App() {
  const[billname, setbillName] = useState('');
  const[amount, setAmount] = useState('');
  const[bills, setBills] = useState([]);
  function addbill(){
    if(billname==='' || amount===''){
      alert('Please fill all the fields');
      return;
    }
    const bill = {
      name: billname,
      amount: amount
    }
    setBills([...bills, bill]);
    setbillName('');
    setAmount('');
  }
  const totlamount = bills.reduce((total, bill) => total + parseFloat(bill.amount), 0);
  function deletebill(index){
    const newbills = [...bills];
    newbills.splice(index, 1);
    setBills(newbills);
  }
  return (
  <centre>
  <h1>Online Bill Calculator</h1>
  <input type="text" placeholder='Enter bill name' value={billname} onChange={(e)=>setbillName(e.target.value)} />
  <input type="number" placeholder='Enter bill amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
  <button onClick={addbill}>Add Bill</button>
  <h2>Total Amount: {totlamount}</h2>
  <ul>
    {bills.map((bill, index) => (
      <li key={index}>
        {bill.name}: ${bill.amount} <button onClick={()=>deletebill(index)}>Delete</button>
      </li>
    ))}
  </ul>
  </centre>
  );
}

export default App;
