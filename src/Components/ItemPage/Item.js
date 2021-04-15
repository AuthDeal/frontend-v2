import React, {useEffect, useState} from 'react';
import {Image} from "antd";
import "./../../Style/Item.css"

const gitHubUrl = 'http://localhost:8080/item/18';


function Item() {

  // get json data from url
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
      <div className="product">
        <Image
            width={300}
            src={userData.picture}
        />
        <h2 className="text">Product: {userData.itemName}</h2>
        <h2 className="text">Description: {userData.description}</h2>
        <h2 className="text">Price: ${userData.price}</h2>
        <h2 className="text">Condition: {userData.itemCondition}</h2>


          {/*    <h3>Condition: {userData.itemCondition}</h3>*/}
          {/*    /!*<h3>Seller: {userData.users.userName}</h3>*!/*/}
          {/*    /!*<h3>Phone Number: {userData.users.phoneNum}</h3>*!/*/}
          {/*    /!*<Rate disabled defaultValue={userData.users.rate}/>*!/*/}
      </div>
  );
}

export default Item;