import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useEffect,useState} from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";


const UpdateSupplier=()=> {

//******************************************************************************** */
const [id,setsupplierid]                   = useState(0);
const [SupplierName,setSupplierName] = useState("");
const [ContactNo,setContactNo] = useState("");
const [Address,setAddress] = useState("");
const [Email,setEmail] = useState("");
const [Password,setPassword] = useState("");
const [Items,setItems] = useState("");
// const [ItemCategories,setItemCategories] = useState("");

const navigate = useNavigate();

useEffect(()=> {
    
    setSupplierName(localStorage.getItem("SupplierName"));
    setContactNo(localStorage.getItem("ContactNo"));
    setAddress(localStorage.getItem("Address"));
    setEmail(localStorage.getItem("Email"));
    setPassword(localStorage.getItem("Password"));
    setItems(localStorage.getItem("Items"));
},[])


const handleUpdate=(e)=>{
    e.preventDefault();
   console.log("id....",id);
  axios.post(`http://localhost:5000/supplier/update/${id}`,
    {
        SupplierName:SupplierName,
        ContactNo:ContactNo,
        Address:Address,
        Email:Email,
        Password:Password,
        Items:Items
      //  ItemCategories:ItemCategories

    }
  ).then(()=> {
    alert("Supplier updated!!");
    navigate("/allsup");
  });
  
};

//******************************************************************************** */

  return (
    <>
    <h1 style={{textAlign:"center"}}>Update Supplier Registration</h1>
    <div className="container">
      
        <Form onSubmit={handleUpdate}>


        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control type="String" placeholder="Enter Supplier Name" 
          value={SupplierName}
            onChange={(e)=>{setSupplierName(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="String" placeholder="Enter Your Number"
          value={ContactNo}
          onChange={(e)=>{setContactNo(e.target.value);

          }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="String" placeholder="Enter Your Address"
          value={Address}
          onChange={(e)=>{setAddress(e.target.value);

          }}
          
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" 
          value={Email}
          onChange={(e)=>{setEmail(e.target.value);

          }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          value={Password}
          onChange={(e)=>{setPassword(e.target.value);

          }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicItems">
          <Form.Label>Items</Form.Label>
          <Form.Control type="String" placeholder="Enter Your Items"
          value={Items}
          onChange={(e)=>{setItems(e.target.value);

          }}
          
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Item Categories</Form.Label> 
          <Form.Text className="text-muted"
          onChange={(e)=>{setItemCategories(e.target.value);

          }}>
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox1">
          <Form.Check type="checkbox" label="Meat" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox2">
          <Form.Check type="checkbox" label="Vegetables" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox3">
          <Form.Check type="checkbox" label="spices" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox4">
          <Form.Check type="checkbox" label="Fish" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox5">
          <Form.Check type="checkbox" label="Flour" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox6">
          <Form.Check type="checkbox" label="Herbs" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox7">
          <Form.Check type="checkbox" label="Fruits" />
        </Form.Group>

        </Form.Group> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I certify that the information given above is true and correct" />
        </Form.Group> */}

        <Button type='submit'>Update</Button>
          

        </Form>
            </div>
    </>
    
  );
};

export default UpdateSupplier;