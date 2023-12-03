import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./directory.module.css";
import { useContext } from "react";
import { Sender } from "../../Context";
import { Link } from "react-router-dom";

const Directory = () => {
  let [directory, setDirectory] = useState([]);
  let [post, setPost] = useState([]);
  // console.log(post);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
      setDirectory(usersResponse.data);
    } catch (error) {
      // Handle error
      console.error("Error fetching users:", error);
    }
  };

  fetchData();
}, []);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(postsResponse.data);
    } catch (error) {
      // Handle error
      console.error("Error fetching posts:", error);
    }
  };

  fetchPosts();
}, []);

// Rest of your code remains the same
let { state, setState, details, setDetails } = useContext(Sender);

let getData = async (id) => {
  try {
    const postsByUser = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    setState(postsByUser.data);

    const userDetails = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    setDetails(userDetails.data);
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
  }
};

  return (
    <section className={style.directoryBlock}>
      <div>
        <h3 style={{ textAlign: "center" }}>Directory</h3>

        <div className={style.cardParent}>
          {directory.map((li, i) => {
            return (
              <Link to="/portal">
                <div className={style.card} onClick={() => getData(li.id)}>
                  <h4 key={i}>Name: {li.name}</h4>
                  <p>Post : {post.filter(ef => ef.userId === li.id).length}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Directory;
