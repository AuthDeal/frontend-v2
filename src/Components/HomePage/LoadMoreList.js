import React from 'react';

import 'antd/dist/antd.css';
import './../../Style/LoadMoreList.css';
import {List, Avatar, Button, Skeleton, Image, Card, Rate} from 'antd';
import request from 'reqwest';

const count = 20;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;



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
        data: res.results,
        list: res.results,
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
          [...new Array(count)].map(() => ({loading: true, name: {}}))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
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
                    <Card hoverable
                        title={"Product description: " + item.name.last + " " + item.name.first}
                    >
                      <Image
                          width={200}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                      <p> </p>
                      <h2>Price: $ 199.99</h2>
                      <Rate disabled defaultValue={4}/>
                    </Card>
                  </Skeleton>
            )}
        />
    );
  }
}