import Table from 'react-bootstrap/Table'
import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom";






const ReadData = () => {

    const[data,setData] = useState([]);
    // const [inputText,setInputText]=useState("");

    function getItem(){
        axios.get("http://localhost:5000/supplier/").then((res)=>{
            console.log(res.data);
            setData(res.data);
        });
    }

    
    
    




    // const inputHandler = (e) =>{
    //     setInputText(e.target.value.toLowerCase());
    // }


    //DELETE
    
    function deleteItem(id){
        axios.delete(`http://localhost:5000/supplier/${id}`).then((res)=>{getItem();});
    }
    
    const setToLocalstorage = (SupplierName,ContactNo,Address,Email,Password,Items) => {
        
        localStorage.setItem("SupplierName", SupplierName);
        localStorage.setItem("ContactNo",ContactNo);
        localStorage.setItem("Address",Address);
        localStorage.setItem("Email",Email);
        localStorage.setItem("Password",Password);
        localStorage.setItem("Items",Items);
        
    }

    useEffect(() => {
        getItem();
    },[]);

    

return(

    
    <>
    <h1 style={{textAlign:"center"}}>View Supplier Registration</h1>
    
    <div>

    <input Type="Text" placeholder='Search...'  className='Search'/>
    
    </div>
    


    
    {/* <div class="mb-3">
        <input type="search" placeholder = "Search Here" class="form-control" onChange={inputHandler}/>
    </div> */}
    




    <div className="container">
       <table className="table">
            <thead 
            // className="p-3 mb-2 bg-primary text-white"
            >
                <tr>
                    
                    <th scope="col">Supplier Name</th>
                    <th scope="col">ContactNo</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                        
                    
                    <th scope="col"></th>  
                    <th scope="col"></th> 
                </tr>
            </thead>
            {
                data
                // .filter((el => {
                //     if(el === "" ){
                //         return el;
                //     }else{
                //         return(el.name.toLowerCase().includes(inputText));
                //     }
                // }))
                .map((eachData)=>{
                    return(
                        
                         <tbody>
                            <tr className="p-3 mb-2 bg-black text-white">
                                
                                <td>{eachData.SupplierName}</td>
                                <td>{eachData.ContactNo}</td>
                                <td>{eachData.Address}</td>
                                <td>{eachData.Email}</td>
                                
                                
                                
                                <td><Link to={`/UpdateSup`}><button className="btn btn-success" onClick={()=> setToLocalstorage(
                                    
                                    eachData.SupplierName,
                                    eachData.ContactNo,
                                    eachData.Address,
                                    eachData.Email,
                                    eachData.Password,
                                    eachData.Items
                                    
                                )}>Update{" "}</button></Link></td>

                                <td><button className="btn btn-danger" onClick={()=>deleteItem(eachData._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                        
                    )
                })
           
            }
       </table>
       <td><Link to={`/sp`}><button className="btn btn-success">Add New{" "}</button></Link></td>
    </div>
    </>
);
};
export default ReadData;