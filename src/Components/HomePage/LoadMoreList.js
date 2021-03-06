import React from 'react';

import 'antd/dist/antd.css';
import './../../Style/LoadMoreList.css';
import {List, Avatar, Button, Skeleton, Image, Card, Rate} from 'antd';
import request from 'reqwest';
import {Link} from "react-router-dom";

const count = 21;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const fakeDataUrl = 'http://localhost:8080/items';



export default class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res,
        list: res,
      });
    });
  }

  getData = callback => {
    request({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
          [...new Array(count)].map(() => ({loading: true, itemName: {}}))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res);
      this.setState(
          {
            data,
            list: data,
            loading: false,
          },
          () => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          },
      );
    });
  };

  render() {
    const {initLoading, loading, list} = this.state;
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                  textAlign: 'center',
                  marginTop: 12,
                  height: 32,
                  lineHeight: '32px',
                }}
            >
              <Button onClick={this.onLoadMore}>loading more</Button>
            </div>
        ) : null;

    return (
        <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            renderItem={item => (
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <Link to="/item" style={{color:'black'}}>
                      <Card hoverable
                            title={"Product: " + item.itemName + " " }
                            style={{margin:"15px"}}

                      >
                        <Image
                            width={200}
                            src={item.picture}
                            // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <h2>Price: $ {item.price}</h2>
                        <Rate disabled defaultValue={item.users.rate}/>
                      </Card>
                    </Link>
                  </Skeleton>
            )}
        />
    );
  }
}