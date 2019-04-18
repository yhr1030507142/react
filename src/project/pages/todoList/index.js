import React from 'react'
import { connect } from 'react-redux'
import { addTodo , delTodo ,toggleTodo} from '../../redux/actions/todoList'
import './index.scss'
//@connect 连接  修饰器
@connect( 
    (state) => ({ 
        todoList:state.todoList
    })
) 

class TodoList extends React.Component {
    submit = (e) => {
        var todoLength = this.props.todoList.length;
        e.preventDefault()
        if(!this.input.value){
            return
        }
        this.props.dispatch(addTodo({   //this.props   == store
            id:todoLength++,
            text: this.input.value,
            check:false,
            type: 'ADD_TODO'
        }))
        this.input.value = ''
    }
    del = (id) => {
        this.props.dispatch(delTodo({   //this.props   == store
            id:id,
            type: 'DEL_TODO'
        }))
    }

    toggleTodo = (id) => {
        this.props.dispatch(toggleTodo({   //this.props   == store
            id:id,
            type: 'TOGGLE_TODO'
        }))
    }

 
    render() {
        const {todoList} = this.props;
        return (
            <div className="todo-box">
                <div className="todo-innerBox">
                     <div className="todo-tab">
                        
                    </div>
                    <ul className="list-group">
                        {
                            todoList.map(todo =>
                            <li className="todo-list_li" style={{ textDecoration:todo.check ? "line-through" : "none" }}>
                                <input type="checkbox" className="check-box" checked={todo.check} 
                                    onClick={(id)=>this.toggleTodo(todo.id)}
                                />
                                {todo.text}
                                <button className="todo-list_del" onClick={(id)=>this.del(todo.id)}>删除</button>
                            </li>)
                        }
                    </ul>
                    <form className="todo-add">
                        <input placeholder="你想做点什么" ref={dom =>this.input = dom} className="todo-input" />
                        <button type="submit" className="todo-btn" onClick={(event)=>this.submit(event)}>添加任务</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList;