import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    const url = "http://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({posts:posts})
    })
  }
  
  render() {
    const columns = [
      {
        Header: "User ID",
        accessor: "id",
        style: {
          textAlign: "right"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "ID",
        accessor: "userId",
        style: {
          textAlign: "right"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Title",
        accessor: "title",
        sortable: false,
        filterable: false,

      },
      {
        Header: "Content",
        accessor: "body",
        sortable: false,
        filterable: false
      },
    ]
    return (
      <ReactTable columns={columns}
        data={this.state.posts}
        filterable
        defaultPageSize={5}
        noDataText={"Loading..."}
      >

      </ReactTable>
    );
  }
}

export default App;
