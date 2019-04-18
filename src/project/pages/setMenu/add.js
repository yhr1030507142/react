import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './add.scss'
import {
    Form, Input, Button, Checkbox,
  } from 'antd';
  



class addSetMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkNick: false,
        };
    }
    check = () => {
        this.props.form.validateFields(
          (err) => {
            if (!err) {
              console.info('success');
            }
          },
        );
      }
    
      handleChange = (e) => {
        this.setState({
          checkNick: e.target.checked,
        }, () => {
          this.props.form.validateFields(['nickname'], { force: true });
        });
      }

      handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {   //校验处理
          if (!err) {
            if(values.userName == '123' && values.password == '123'){
              //页面跳转
              this.props.history.push('/index');
              sessionStorage.setItem('name',values.userName);//值存入localStorage
            }else {
              this.openNotificationWithIcon('error');
            }
          }
        });
      }
   componentDidMount(){
      
   };

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div> 
              
            <div>
            <Form onSubmit={this.handleSubmit} className="form">
            <Form.Item  label="Name">
              {getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: 'Please input your name',
                }],
              })(
                <Input placeholder="Please input your name" />
              )}
            </Form.Item>
            <Form.Item label="Nickname">
              {getFieldDecorator('nickname', {
                rules: [{
                  required: this.state.checkNick,
                  message: 'Please input your nickname',
                }],
              })(
                <Input placeholder="Please input your nickname" />
              )}
            </Form.Item>
            <Form.Item>
              <Checkbox
                checked={this.state.checkNick}
                onChange={this.handleChange}
              >
                Nickname is required
              </Checkbox>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                新增
              </Button>
            </Form.Item>
            </Form>
          </div>
          </div>
        );
      }
}
const add = Form.create()(addSetMenu);
export default add;

