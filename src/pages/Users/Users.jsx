import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import './users.css'
function Users() {
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'Username',
    width: 200,
    
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 190,
   
  },
  {
    field: 'status',
    headerName: 'status',
    width: 150,
  },
  {
    field: 'transaction',
    headerName: 'Transactions',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, 
    username: 'Jon Snow', 
    avatar: 'https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907_960_720.jpg', 
    email: "genn@nevadaibm.com",
    status:'active',
    transaction:'$120.00'
},
{ id: 2, 
    username: 'Jon Snow', 
    avatar: 'https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907_960_720.jpg', 
    email: "genn@nevadaibm.com",
    status:'active',
    transaction:'$120.00'
},
{ id: 3, 
    username: 'Jon Snow', 
    avatar: 'https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907_960_720.jpg', 
    email: "genn@nevadaibm.com",
    status:'active',
    transaction:'$120.00'
},
];
    return (
        <div className="usersContainer">
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default Users
