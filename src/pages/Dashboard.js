import React, { useEffect, useState } from "react";
import "../style/Dashboard.scss";
import { IoLogOut } from "react-icons/io5";
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../Firebase";
import { CiSearch } from "react-icons/ci";

function Dashboard(props) {
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    const db = getDatabase(app);
    const contactRef = ref(db, "contacts");

    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const totalCountEntries = Object.keys(data).length;
        setTotalEntries(totalCountEntries);
      }
    });
  }, []);

  console.log(totalEntries);

  return (
    <>
      <div className="dashboard-parent parent">
        <div className="dashboard-cont ">
          <div className="entreis">
            <h2>total entreis</h2>
            <div className="total-entreis">
              <h2> {totalEntries} </h2>
            </div>
          </div>
          <div className="search-bar">
           
            <input
              type="search"
              placeholder="search for name"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </div>
          <div className="logout-btn">
            <button className="btn log-btn" onClick={props.logout}>
              Logout{" "}
              <span>
                <IoLogOut />
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
