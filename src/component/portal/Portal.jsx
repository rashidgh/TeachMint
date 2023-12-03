import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./portal.module.css";
import { useContext } from "react";
import { Sender } from "../../Context";
import { Link } from "react-router-dom";

const Portal = () => {
  const [countries, setCountries] = useState([]);
  const { state, details } = useContext(Sender);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://worldtimeapi.org/api/timezone"
        );
        // const {data} = await axios.get(
        //   `https://worldtimeapi.org/api/timezone/America/Argentina/Salta`
        // );
        // console.log(data);
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={style.portalBlock}>
      <div className={style.portalParent}>
        <div className={style.portal}>
          <Link to="/">
            <button className={style.bckbtn}>Back</button>
          </Link>
          <select name="countries" id="countries">
            {countries.map((country, index) => (
              <option key={index}>{country}</option>
            ))}
          </select>
          <button className={style.pausebtn}>Pause/Start</button>
        </div>
      </div>
      <div className={style.profileDetails}>
        <h3 className={style.profile}>Profile Page</h3>
      </div>

      {details === null ? (
        <p>Loading</p>
      ) : (
        details.map((user, index) => (
          <div className={style.userDetailsParent}>
            <div className={style.userDetailsBlock} key={index}>
              <div>
                <h4>{user.name}</h4>
                <p>
                  {user.username} | {user.company.catchPhrase}
                </p>
              </div>
              <div>
                <h4>{user.address.street}</h4>
                <p>
                  {user.email} | {user.phone}
                </p>
              </div>
            </div>
          </div>
        ))
      )}

      <div className={style.postParent}>
        <div className={style.postBlock}>
          {state === "" ? (
            <p>Loading</p>
          ) : (
            state.map((post, index) => (
              <div key={index}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Portal;
