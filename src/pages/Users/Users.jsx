import React,{useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import './users.css'
import {DeleteOutline} from '@material-ui/icons';
import {rows} from '../../dummyData'
import { Link } from 'react-router-dom';

//import {Delete} from './@material-ui/icons'
function Users() {

  const [dataRow, setDataRow] = useState(rows);

  const handledelete = (id)=> setDataRow(()=> dataRow.filter((item)=> item.id !== id ));
  
const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'username',
    headerName: 'Username',
    renderCell: ({row}) => {
      return (<div className="usernameImage">
        <img src= {row.avatar} alt = "view feom tavle"/>
        <span className="name">{row.username}</span>
      </div>)
    },
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
  {
    field: 'delete',
    headerName: 'Delete',
    sortable: false,
    width: 160,
    renderCell:({row}) => (<><div className="userdelete">
      <Link to = {`/user/${row.id}`}>
      <button className="bt">Edit</button>
      </Link>
      <DeleteOutline style ={{marginLeft:20,
      color:"red",
    cursor:"pointer"}} onClick = {()=>handledelete(row.id) }/></div></>)

  },
];


    return (
        <div className="usersContainer">
            <DataGrid
        rows={dataRow}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default Users
