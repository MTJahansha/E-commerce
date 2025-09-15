import "./App.css"
import { MdCurrencyRupee } from "react-icons/md";
export default function Card(value){
    // console.log(value);
    return(
        <div  className="card" onClick={()=>{value.fun1(value);}}>
            <img src={value.sendproductPic}/>
            <div>
            <p><MdCurrencyRupee/>{value.sendProductPrice}</p>
            </div>

            
            <div>
            <h2>{value.sendProductName}</h2>
            </div>
        </div>
    )
}