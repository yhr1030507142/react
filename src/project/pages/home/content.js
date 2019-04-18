import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Route}  from 'react-router-dom';
import Index from '../index/index';
import Music from '../music/index';
import Tools from '../tools/index';
import TodoList from '../todoList/index';
import Album from '../album/index';
import setMenu from '../setMenu/index';
import addSetMenu from '../setMenu/add';


import './content.scss'
const { Content } = Layout;

class Main extends Component {
    render() {
        return (
            <Content className="content">
                <Route exact path="/index" component={Index}></Route>
                <Route path="/index/music" component={Music}></Route>
                <Route path="/index/tools" component={Tools}></Route>
                <Route path="/index/todoList" component={TodoList} />
                <Route path="/index/album" component={Album} />
                <Route path="/index/setMenu" component={setMenu} />
                <Route path="/index/addSetMenu" component={addSetMenu}/>

            </Content>
        );
      }
}

export default Main;
