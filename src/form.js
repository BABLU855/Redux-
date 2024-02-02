// import { useState } from "react";
// import { UseDispatch, useDispatch } from "react-redux";

// function Form(){
//     let dispatch = useDispatch();
//     const [amount,setAmount] = useState("")
//     return<>
//     <div className="container">
//        <h2>Form</h2>
//        <div className="row">
//         <div className="col-4">
//             <input className="form-control" type="number" placeholder="Enter Amount"  
//             value={amount}
//             onChange={(e)=>{
//             let data = e.target.value;
//             setAmount(data);
//             }
        
            
//         }/>
//         </div>
//         <button className="btn btn-primary col-1"
        
//         onClick= {() => {
//             dispatch({"type":"deposit" ,payload:});
//         }}
//         > Deposit</button>
//        </div>
//     </div>
    
//     </>;
//   }
//   export default Form;

import { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  return (
    <div className="container">
      <h2>Form</h2>
      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary col-1"
          onClick={() => {
            dispatch({ type: "deposit", payload: Number(amount) });
            setAmount("")
          }}
        >
          Deposit
        </button>
      </div>
    </div>
  );
}

export default Form;
