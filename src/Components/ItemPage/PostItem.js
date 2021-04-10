
import React, {Component} from "react";

import axios from "axios";

export default class PostItem extends Component{
  constructor(props){
    super(props)
    this.state = { itemName:'', price:'', picture:'', description:'', itemCondition:'', zipcode:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event){
    const { itemName, price, picture, description, itemCondition, zipcode } = this.state
    event.preventDefault()
    console.log(this.state)
    alert(` 
      ____Your Details____\n 
      Email : ${itemName} 
      Age : ${itemCondition} 
      Phone No : ${description} 
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
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state
  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>ItemName</label>
            <input
                name='itemName'
                placeholder='itemName'
                value = {this.state.itemName}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label >item price</label>
            <input
                name='price'
                placeholder='price'
                value={this.state.price}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label >item picture</label>
            <input
                name='picture'
                placeholder='picture'
                value={this.state.picture}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label >item description</label>
            <input
                name='description'
                placeholder='description'
                value={this.state.description}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label >item condition</label>
            <input
                name='itemCondition'
                placeholder='item condition'
                value={this.state.itemCondition}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label>zipcode</label>
            <input
                name='zipcode'
                placeholder='zipcode'
                value={this.state.zipcode}
                onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <button>Create Account</button>
          </div>
        </form>
    )
  }
}

// const { Option } = Select;
// const formItemLayout = {
//     labelCol: {
//         span: 6,
//     },
//     wrapperCol: {
//         span: 14,
//     },
// };
//
// const normFile = (e) => {
//     console.log('Upload event:', e);
//
//     if (Array.isArray(e)) {
//         return e;
//     }
//
//     return e && e.fileList;
// };
//
// // const onFinish = (values) => {
// //     console.log('Received values of form: ', values);
// // };
//
// class PostItem extends React.Component{
//
//     constructor(props){
//         super(props)
//         this.state = {
//             itemName:'',
//             category:'',
//             itemCondition:'',
//             picture:'',
//             price:'',
//             discription:'',
//             address:'',
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     // Form submitting logic, prevent default page refresh
//     handleSubmit(event){
//         const { itemName, category, itemCondition, picture, discription, address } = this.state
//
//
//         // fetch('https://your-node-server-here.com/api/endpoint', {
//         //     // method: 'POST',
//         //     method: 'post',
//         //     headers: {
//         //         'Accept': 'application/json',
//         //         'Content-type': 'application/json',
//         //     },
//         //     // We convert the React state to JSON and send it as the POST body
//         //     body: JSON.stringify(this.state)
//         //
//         // }).then(function(response) {
//         //     console.log(response)
//         //     return response.json();
//         // });
//
//         event.preventDefault()
//         console.log(this.state.itemName)
//     //     alert(`
//     //   ____Your Details____\n
//     //   Email : ${email}
//     //   Name : ${name}
//     //   Age : ${age}
//     //   Address : ${address}
//     //   Phone No : ${phoneNo}
//     // `)
//     }
//
//     // Method causes to store all the values of the
//     // input field in react state single method handle
//     // input changes of all the input field using ES6
//     // javascript feature computed property names
//     handleChange(event){
//         this.setState({
//             // Computed property names
//             // keys of the objects are computed dynamically
//             [event.target.name] : event.target.value
//         })
//     }
//
//     render(){
//         return(
//             <div className="form">
//
//                 <Form
//                     name="validate_other"
//                     {...formItemLayout}
//                     onSubmit={this.handleSubmit}
//                 >
//                     <Form.Item label="">
//                         <span className="ant-form-text" ><h1>Post Your Item</h1></span>
//                     </Form.Item>
//                     <Form.Item
//                         {...formItemLayout}
//                         name="Title"
//                         label="Title"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input item title',
//                             },
//                         ]}
//                     >
//                         {/*<Input placeholder="Please input your item title" />*/}
//                         <input
//                             name='item title'
//                             placeholder="Please input your item title"
//                             value = {this.state.itemName}
//                             onChange={this.handleChange}
//                         />
//                     </Form.Item>
//                     <Form.Item
//                         {...formItemLayout}
//                         name="category"
//                         label="category"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input item category',
//                             },
//                         ]}
//                     >
//                         <input
//                             name='item category'
//                             placeholder="Please input your item category"
//                             value = {this.state.category}
//                             onChange={this.handleChange}
//                         />
//                         {/*<Select name ='category'*/}
//                         {/*        placeholder="Please select a category"*/}
//                         {/*        mode="multiple"*/}
//                         {/*        value = {this.state.category}*/}
//                         {/*        onChange={this.handleChange}*/}
//                         {/*>*/}
//                         {/*    <Option value="Book">Book</Option>*/}
//                         {/*    <Option value="Kitchen Tool">Kitchen Tools</Option>*/}
//                         {/*    <Option value="computer accessories">Computer Accessories</Option>*/}
//                         {/*    <Option value="furniture">Furniture</Option>*/}
//                         {/*</Select>*/}
//                     </Form.Item>
//
//                     <Form.Item
//                         name="itemCondition"
//                         label="itemCondition"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please select your item condition!',
//                             },
//                         ]}
//                     >
//                         <input
//                             name='itemCondition'
//                             placeholder="Please input your itemCondition"
//                             value = {this.state.itemCondition}
//                             onChange={this.handleChange}
//                         />
//                         {/*<Select name ='itemCondition'*/}
//                         {/*        placeholder="Please select item condition"*/}
//                         {/*        mode="multiple"*/}
//                         {/*        value = {this.state.itemCondition}*/}
//                         {/*        onChange={this.handleChange}*/}
//                         {/*>*/}
//                         {/*    <Option value="new">New</Option>*/}
//                         {/*    <Option value="used">Used</Option>*/}
//                         {/*</Select>*/}
//                     </Form.Item>
//
//                     <Form.Item
//                         name="upload Photo"
//                         label="Upload Photo"
//                         valuePropName="fileList"
//                         getValueFromEvent={normFile}
//                         extra=""
//                         // rules={[
//                         //     {
//                         //         required: true,
//                         //     },
//                         // ]}
//                     >
//                         <Upload name="logo" action="/upload.do" listType="picture">
//                             <Button icon={<UploadOutlined />}>Click to upload</Button>
//                         </Upload>
//                     </Form.Item>
//
//                     {/*<Form.Item label="Dragger">*/}
//                     {/*    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>*/}
//                     {/*        <Upload.Dragger name="files" action="/upload.do">*/}
//                     {/*            <p className="ant-upload-drag-icon">*/}
//                     {/*                <InboxOutlined />*/}
//                     {/*            </p>*/}
//                     {/*            <p className="ant-upload-text">Click or drag file to this area to upload</p>*/}
//                     {/*            <p className="ant-upload-hint">Support for a single or bulk upload.</p>*/}
//                     {/*        </Upload.Dragger>*/}
//                     {/*    </Form.Item>*/}
//                     {/*</Form.Item>*/}
//
//                     <Form.Item
//                         name="price"
//                         label="Price"
//                         rules={[
//                             {
//                                 required: true,
//                                 message: 'Please input price in $',
//                             },
//                         ]}
//                     >
//                         <input
//                             name='price'
//                             placeholder="Please input item price in $"
//                             value = {this.state.price}
//                             onChange={this.handleChange}
//                         />
//                     </Form.Item>
//
//                     <Form.Item label="Item Description:">
//                         <Input.TextArea
//                             name='description'
//                             placeholder="Please input item description"
//                             value = {this.state.description}
//                             onChange={this.handleChange}
//
//                         />
//                     </Form.Item>
//
//                     <h2>Location & Delivery Information</h2>
//                     <Form.Item label="Address">
//                         <Input.Group compact
//                                      name='adress'
//                                      value = {this.state.description}
//                                      onChange={this.handleChange}
//                         >
//
//                             <Form.Item
//                                 name={['address', 'street']}
//                                 noStyle
//                                 rules={[{ required: true, message: 'Street is required' }]}
//                             >
//                                 <Input style={{ width: '85%' }} placeholder="Input street" />
//                             </Form.Item>
//                             <Form.Item
//                                 name={['address', 'street']}
//                                 noStyle
//                                 rules={[{ required: true, message: 'city is required' }]}
//                             >
//                                 <Input style={{ width: '30%' }} placeholder="city" />
//                             </Form.Item>
//                             <Form.Item
//                                 name={['address', 'street']}
//                                 noStyle
//                                 rules={[{ required: true, message: 'city is required' }]}
//                             >
//                                 <Input style={{ width: '30%' }} placeholder="state" />
//                             </Form.Item>
//                             <Form.Item
//                                 name={['address', 'street']}
//                                 noStyle
//                                 rules={[{ required: true, message: 'city is required' }]}
//                             >
//                                 <Input style={{ width: '25%' }} placeholder="postcode" />
//                             </Form.Item>
//
//
//                         </Input.Group>
//                     </Form.Item>
//
//
//                     <Form.Item
//                         wrapperCol={{
//                             span: 12,
//                             offset: 6,
//                         }}
//                     >
//                         <Button type="primary" htmlType="submit">
//                             Post Item
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         );
//     }
// }
