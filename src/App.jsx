import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { FaSearch } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import Card from "./card"
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/pic4.jpg'
import pic5 from './assets/pic5.jpg'
import pic6 from './assets/pic6.jpg'
import pic7 from './assets/pic7.webp'
import pic8 from './assets/pic8.webp'
import pic9 from './assets/pic9.webp'
import pic10 from './assets/pic10.webp'
import pic11 from './assets/pic11.jpg'
import pic12 from './assets/pic12.jpg'
import pic13 from './assets/pic13.jpg'
import pic14 from './assets/pic14.jpg'
import pic15 from './assets/pic15.jpg'
import pic16 from './assets/pic16.jpg'
import pic17 from './assets/pic17.jpg'
import pic18 from './assets/pic18.jpg'
import pic19 from './assets/pic19.png'
import pic20 from './assets/pic20.jpg'
import { use } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function App() {

   var data=[
      {
        name : "Neapolitan ice cream",
        price : 200,
        pic : pic1,
        quandity :0,
        id : 1,
      },
      {
        name : "Icebox Cake",
        price : 300,
        pic : pic2,
        id : 2,
      },
      {
        name : "Strawberry ice cream",
        price : 400,
        pic : pic3,
        id : 3,
      },
      {
        name : "Chocolate Cake",
        price : 500,
        pic : pic4,
        id : 4,
      },
      {
        name : "Cherry Cheesecake",
        price : 100,
        pic : pic5,
        id : 5,
      },
      {
        name : "Vanila and Chocolate ice cream cake",
        price : 500,
        pic : pic6,
        id : 6,
      },
      {
        name : "Italian Eggless Milk cake",
        price : 600,
        pic : pic7,
        id : 7,
      },
      {
        name : "Pearly Blue Cream Cake",
        price : 800,
        pic : pic8,
        id : 8,
      },
      {
        name : "Sunset Heart Cream Cake",
        price : 300,
        pic : pic9,
        id : 9,
      },
      {
        name : "French Desserts",
        price : 200,
        pic : pic10,
        id : 10,
      },
      {
        name : "Cheescake with Cherries",
        price : 100,
        pic : pic11,
        id : 11,
      },
      {
        name : "Strawberry ice cream cake",
        price : 1100,
        pic : pic12,
        id : 12,
      },
      {
        name : "Lemon Supreme Dessert",
        price : 2100,
        pic : pic13,
        id : 13,
      },
      {
        name : "Honey cremey cake",
        price : 2300,
        pic : pic14,
        id : 14,
      },
      {
        name : "Strawberry cheescake",
        price : 2100,
        pic : pic15,
        id : 15,
      },
      {
        name : "Dundee cake",
        price : 2900,
        pic : pic16,
        id : 16,
      },
      {
        name : "Ice cream Sandwich cake",
        price : 100,
        pic : pic17,
        id : 17,
      },
      {
        name : "Honey Strawberry cake",
        price : 900,
        pic : pic18,
        id : 18,
      },
      {
        name : "Blueberry cheesecake",
        price : 700,
        pic : pic19,
        id : 19,
      },
      {
        name : "Vanilla ice cream width berry swirl",
        price : 900,
        pic : pic20,
        id : 20,
      },
      
    ]

  const [visible, setvisible] = useState(true);
  const [bills,setbill]=useState(true)
  const [count ,setcount]=useState(0);  
  const [status,setstatus]=useState([]);
  const [total ,settotal]=useState(0);
  const [touch,settouch]=useState([])
  const [inp,setinp]=useState("")
function hide(){
  setvisible(!visible)
}

// function sum(value){
//   setstatus(value);
//    console.log(status);
// }
function sum(getprops){
  setcount(count+1);
  
  //      false     =  [].some(""=>"" === 1)
  const result = status.some(items=>items.id === getprops.id)
  //   !false==>true
  if(!result){
    //          mt      "" , obj
    setstatus((datas)=>[...datas,getprops])
    
  }
    console.log(status)
    console.log(getprops);


  settotal(()=>total+getprops.sendProductPrice)
  // console.log(total)

             
  settouch((datas=>[...datas,getprops.id]))

}

function bill(){
  setbill(!bills)
}


function insearch(search){
  setinp(search.target.value)
}

const downloadpdf=()=>{
  const down =document.getElementById("pdf-content");
  console.log(html2canvas(down))
  html2canvas(down).then((canvas)=>{
    const imgdata =canvas.toDataURL("img/png")
    const pdf=new jsPDF("p","mm",[80,200]);
    const pdfwidth=pdf.internal.pageSize.getWidth();
    const pdfheight=(canvas.height*pdfwidth)/canvas.width

    pdf.addImage(imgdata,"PNG",0,0,pdfwidth,pdfheight)
    pdf.save("download.pdf")
  })
}


  return (
    <>
     <div className='overall'>
        <nav>
          <div>
            <h1><span>Tasty</span> Desserts</h1>
          </div>
          <div>
           <div className='d1'>
            <input onChange={insearch}  type="text" name='search' placeholder='Enter the Deserts Name' className={`in ${visible== true ?'hide' : "unhide"} `}  />
            <h1  onClick={hide}><FaSearch /></h1>
           </div>

            <h1 onClick={bill} className='store'><FaStoreAlt /></h1> <div className='note'> <p>{count}</p></div>
          </div>
        </nav>
        <main className={`vis ${bills== true ?"main" : "unmain"} `}>
          <div id='pdf-content'>
            
          
          <h1>Billing Details</h1>
          <table>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Rate</th>
              </tr>

                {status.map((ex)=>{
                  return(
                    <tr>
                      {console.log(ex && ex.sendProductName)}
                            <td>{ex && ex.sendProductName}</td>
                            <td>x{touch.filter((item)=>item==ex.id).length}</td>
                            <td>{ex && ex.sendProductPrice * touch.filter((item)=>item==ex.id).length}</td>
                        </tr> 
                  )
                      })}

                        {/* <tr>
                            <td>{status && status.sendProductName}</td>
                            <td>x{count}</td>
                            <td>{status && status.sendProductPrice}</td>
                        </tr> */}
              <tr>
                <th colSpan={1}>Total</th>
                <th></th>
                <th>{total}</th>
              </tr>
          </table>
          </div>
          <div>
            <button onClick={downloadpdf} className='billbtn'>Print Bill</button>
          </div>

        </main>
        <section>
            <div className='food'> 
              {data.map((item)=>(
                 <>
                 {/* {console.log(item.name)} */}
                  {inp!==undefined ?  //st1--> "" !==undefine ccondition true ,st2=> cake!== undefine => true
                   (item.name.toLocaleLowerCase().includes(inp.toLocaleLowerCase())? //st1=> "" inp la ullathu item.name la erukanu check pandra
                   //   ,st2=>cake shop.include(hello)==> false 
                  //    ,st3=>cake shop.include(shop)==> true
                       <Card sendProductName={item.name} sendProductPrice={item.price} sendproductPic={item.pic} fun1={sum}  id={item.id}/>
                       //st1==>fulla visible aaguthu  
                       :null) // antha div va skip pannidu, true vana div va visible aakuthu
                       :null}
                 </>
              ))}

            </div>
        </section>
     </div>
    </>
  )
}

export default App
