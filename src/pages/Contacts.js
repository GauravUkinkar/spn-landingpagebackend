import React, { useEffect, useState } from "react";
import "../style/contact.scss";
import { app } from "../Firebase";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { upload } from "@testing-library/user-event/dist/upload";
import Dashboard from "./Dashboard";
import { MdDelete } from "react-icons/md";

function Contacts(props) {
  const [pagination, setPagination] = useState(20);
  const [data, setData] = useState([]);

  const loadMore = () => {
    setPagination((prevPagination) => prevPagination + 10);
  };

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "contacts");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  const deleteData = (key) => {
    
    const confirmDelete = window.confirm("Are you sure you want to delete this Contact?");
    if (confirmDelete) {
      const db = getDatabase(app);
      const blogRef = ref(db, "contacts/" + key);
      remove(blogRef);
    }
  };

  return (
    <>
      <div className="table">
        <div className="table-div">
          <table className="table-container">
            <tr className="table-heading">
              <th>Name</th>
              <th className="number">Mo.number</th>
              <th className="email">Education</th>
              <th className="email">Residential Taluka</th>
              <th className="email">District</th>
              <th className="message">Message</th>

              <th className="delete">Delete</th>
            </tr>
            {/* {data && Object.entries(data).map(([key, value])=>{
           <tr  key={key} className='table-data'>
           <td>{value.Name}</td>
           <td>{value.number}</td>
           <td> {value.email} </td>
           <td> {value.message} </td>
          
           <td className='delete'> <button className='btn'>Delete</button> </td>
         </tr>
         })} */}
            {data &&
              Object.entries(data)
                .slice(0, pagination)
                .filter(([key, value]) => {
             
               
                    return (
                      props.search.toLowerCase() === "" ||
                      (value.name .toLowerCase().includes(props.search.toLowerCase()))
                    );
                  
            
                 
                })
                .map(([key, value]) => (
                  <tr className="table-data" key={key}>
                    <td> {value.name} </td>
                    <td> {value.number} </td>
                    <td> {value.education} </td>
                    <td> {value.taluka} </td>
                    <td> {value.district} </td>
                    <td> {value.message} </td>
                    <td>
                      {" "}
                      <button className="delete" onClick={()=>deleteData(key)}>
                        <MdDelete />
                      </button>{" "}
                    </td>
                  </tr>
                ))}
          </table>
          {Object.entries(data).length > pagination && (
            <div className="load-more">
              <button className="btn" onClick={loadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contacts;
