import React, { Component } from 'react'

class TodoForm extends Component {

    constructor(){
        super();

        this.state = {
            title : " ",
            author : " ",
            description : " ",
            priority : "low"
        }
    }

    render(){
        return (
           <div className="col-md-4">
                <div className="card">
                <div className="card text-center">
                    <div className="card-header">
                        Create Task
                    </div>

                    <div className="card-body">
                       <div className="form-group">
                        <input type="text" name="title" placeholder="Title" className="form-control">
                            </input>
                        </div>
                       
                        <div className="form-group">
                            <input type="text" name="description" placeholder="Description" className="form-control">
                            </input>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" name="author" placeholder="Author" className="form-control">
                            </input>
                        </div>
                        
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.handleInputChange}
                            >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                            </select>
                        </div>
                        <button className="btn btn-info" value="submit">Create</button>
                       </div>
                    </div>
                </div>
                <br></br>
            </div>
        )
    }

}

export default TodoForm;