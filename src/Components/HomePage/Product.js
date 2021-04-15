import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Rate} from 'antd'

const {Meta} = Card;

function Product() {
  return (
      <Link to="/ShowItem/" style={{color: 'black'}}>
        <div>
          <Card
              hoverable
              style={{width: 300}}
              cover={<img alt="example"
                          src="https://images-na.ssl-images-amazon.com/images/I/81OWCPMmCJL._AC_SL1500_.jpg"/>}
          >

            <Meta title={<span>Casio label writer disc title printer<br/>CW-E60 16039 from JAPAN</span>}
                  description={<Rate disabled defaultValue={4}/>}/>
          </Card>
        </div>
      </Link>
  );
}

export default Product;