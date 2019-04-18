import React, { Component } from 'react';
import { Table, Divider, Tag ,Button } from 'antd';

import fetchJsonp from 'fetch-jsonp';


class SetMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists:[],
            loading:true
        };
    }

    goTO(){   //判断是否登录
      
        this.props.history.push('/index/addSetMenu');
    }


     columns = () =>{ 
        return   [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                {tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                    color = 'volcano';
                  }
                  return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                })}
              </span>
            ),
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;">Invite {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </span>
            ),
          }];
    
    }
    
     data = () => {
        return   [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }];
    }
     

   componentDidMount(){
      
   };
    render() {

        return (
            <div>
            <Button type="primary" size='large' ghost onClick={()=>this.goTO()}>添加</Button>
            <Table columns={this.columns()} dataSource={this.data()} />
            </div>
        );
      }
}

export default SetMenu;

