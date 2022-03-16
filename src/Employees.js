import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
export class Employees extends Component{
    constructor(props){
        super(props);
        this.state={items:[], addModalShow:false, editModalShow:false,DataisLoaded: false}
    }
     
    refreshList(){
        fetch(process.env.REACT_APP_API + 'employees')
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({
                                items: json,
                                DataisLoaded: true
                            });
                        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    render(){
        const {items}=this.state;
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Options</th>
                        </tr>
                        </thead>
                        {items.map(emp=>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.Gender}</td>
                                <td>{emp.Salary}</td>
                                <td>
                                Edit/Delete
                                </td>
                                </tr>)}
                        </Table>
                        </div>
        )
    }
}