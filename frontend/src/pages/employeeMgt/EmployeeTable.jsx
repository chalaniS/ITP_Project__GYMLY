import MaterialTable from 'material-table'
import { useState, useEffect } from 'react';
import { Container} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../../Styles/employee/EmployeeTable.css'
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const useStyles = makeStyles((theme) => ({

  tableContainer: {
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      color: "white"
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "none"
    },
    "& .MuiTableRow-root:nth-of-type(odd)": {
      backgroundColor: "#2c3034"
    },
    "& .MuiTableRow-root:nth-of-type(even)": {
      backgroundColor: "#212529"
    },
    '& .MuiTableHead-root .MuiTableCell-head': {
      color: 'white',
      backgroundColor: "transparent"
    }
  }
}));

function EditSalary(props) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/employeeRegister');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {props.label}
    </Button>
  );
}

function EmployeeTable() {

    const [tableData, setTableData] = useState([])

    const columns = [
        {title: "_id", field: "_id", hidden: true},
        {title: "Employee ID",field: "userId", defaultSort: "asc"},
        {title: "Name",field: "firstName"},
        {title: "Email",field: "email", sorting: false, export: false},
        {title: "Job Role",field: "role"},
        {title: "Salary",field: "salary",type: "currency",currencySetting:{currencyCode: "LKR"}},
    ]

    useEffect(()=>{
      fetch("http://localhost:5000/employee")
      .then(resp=>resp.json())
      .then(resp=>{
        console.log(resp)
        setTableData(resp)})
    },[])

    const navigate = useNavigate();

    const editEmployee = (id) => {
      navigate(`/employeeUpdate/${id}`);
    };
    const addEmployee = () => {
      navigate('/employeeRegister');
    };
    const removeEmployee = (id) => {
      axios.delete(`http://localhost:5000/employee/${id}`)
          .then(response => {

              console.log('Employee removed successfully');
              // Refresh the table to show updated data
              window.alert('Data has been deleted successfully');
              window.location.reload();

          })
          .catch(error => {

              console.log('Error deleting employee:', error);

          });
    }

    const classes = useStyles();

  return (

    <section>
       {/* <Container> */}
        <div className={classes.tableContainer}>
            <MaterialTable className="transparent-table"
              icons={tableIcons} 
              columns={columns} 
              data={tableData}

              actions={[
                {
                  icon: tableIcons.Add,
                  tooltip: 'Add Employee',
                  onClick: (event, rowData) => addEmployee(),
                  isFreeAction: true
                },
                {
                  icon: tableIcons.Edit,
                  tooltip: 'Edit Employee',
                  onClick: (event, rowData) => editEmployee(rowData._id)
                },
                {
                  icon: tableIcons.Delete,
                  tooltip: 'Remove Employee',
                  onClick: (event, rowData) => removeEmployee(rowData._id)
                },
                {
                  icon: () => <EditSalary label="Edit Salary"/>,
                  tooltip: 'Edit Salary',
                }
              ]}
              
              options={
                {
                  sorting:true, 
                  searchFieldVariant:"outlined", 
                  pageSizeOptions:[5,10,20,50,100], 
                  pageSize:10,
                  paginationType:"stepped",
                  exportButton:true,
                  exportAllData:true,
                  exportFileName:"Monthly Salary Report",
                  actionsColumnIndex:-1
                }
              } 
              title="Employee Summary" 
            />
        </div>
       {/* </Container> */}
    </section>

  );
}

export default EmployeeTable;