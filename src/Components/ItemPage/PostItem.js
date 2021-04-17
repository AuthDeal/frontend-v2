import React, {Component} from "react";

import axios from "axios";
import "./../../Style/PostItem.css"

export default class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemName: '',
      price: '',
      picture: '',
      description: '',
      itemCondition: '',
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const {itemName, price, picture, description, itemCondition, zipcode} = this.state
    event.preventDefault()
    console.log(this.state)
    alert(` 
      ____Your Details____\n 
      Item Name : ${itemName} 
      Item Condition : ${itemCondition} 
      Description : ${description} 
    `)

    axios
    .post('http://localhost:8080/items', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

    // fetch('http://localhost:8080/items', {
    //     method: 'post',
    //     mode:'no-cors',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json',
    //     },
    //     // We convert the React state to JSON and send it as the POST body
    //     body: JSON.stringify(
    //        {itemName,address,description},
    //
    //     )
    //
    // }).then(function(response) {
    //     console.log(response)
    // });
  }

  // Method causes to store all the values of the
  // input field in react state single method handle
  // input changes of all the input field using ES6
  // javascript feature computed property names
  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value
    })
  }

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="itemInfo">
            <label htmlFor='name'>Product Name: </label>
            <input
                name='itemName'
                placeholder='itemName'
                value={this.state.itemName}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="itemInfo">
            <label>Price: </label>
            <input
                name='price'
                placeholder='price'
                value={this.state.price}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="itemInfo">
            <label>Picture: </label>
            <input
                name='picture'
                placeholder='picture'
                value={this.state.picture}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="itemInfo">
            <label>Description: </label>
            <input
                name='description'
                placeholder='description'
                value={this.state.description}
                onChange={this.handleChange}
            />
          </div>
          {/*<br></br>*/}
          {/*<div className="itemInfo">*/}
          {/*  <label>Condition: </label>*/}
          {/*  <input*/}
          {/*      name='itemCondition'*/}
          {/*      placeholder='item condition'*/}
          {/*      value={this.state.itemCondition}*/}
          {/*      onChange={this.handleChange}*/}
          {/*  />*/}
          {/*</div>*/}
          <br></br>
          <div className="itemInfo">
            <label>Condition:
              <select
                  name='itemCondition'
                  value={this.state.itemCondition}
                      onChange={this.handleChange}>
                <option value="NEW">NEW</option>
                <option value="LIKENEW">LIKENEW</option>
                <option value="GOOD">GOOD</option>
                <option value="FAIR">FAIR</option>
                <option value="POOR">POOR</option>
              </select>
            </label>
          </div>
          <br></br>
          <div className="itemInfo">
            <label>Zipcode: </label>
            <input
                name='zipcode'
                placeholder='zipcode'
                value={this.state.zipcode}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="createProduct">
            <button>Create Product</button>
          </div>
        </form>
    )
  }
}

