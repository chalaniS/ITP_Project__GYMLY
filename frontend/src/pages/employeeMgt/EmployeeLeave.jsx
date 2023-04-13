import MaterialTable from 'material-table'
import { useState } from 'react';
import { Container} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../../Styles/employee/EmployeeTable.css'

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

function EmployeeLeave() {

    const [tableData, setTableData] = useState([
      {empID: "OM001", name: "Vidusha", jobRole: "Operation Manager", leaveType: "A", leaveFrom: "2023-04-12", leaveTo: "2023-04-12"},
      {empID: "CM001", name: "Sithum", jobRole: "Customer Affairs Manager", leaveType: "C", leaveFrom: "2023-04-12", leaveTo: "2023-04-12"},
      {empID: "TR008", name: "Chalani", jobRole: "Trainer", leaveType: "C", leaveFrom: "2023-04-12", leaveTo: "2023-04-12"},
      {empID: "CL010", name: "Lakindu", jobRole: "Cleaner", leaveType: "C", leaveFrom: "2023-04-12", leaveTo: "2023-04-12"},
      {empID: "CL010", name: "Lakindu", jobRole: "Cleaner", leaveType: "M", leaveFrom: "2023-04-12", leaveTo: "2023-04-12"},
      {empID: "CL010", name: "Lakindu", jobRole: "Cleaner", leaveType: "M", leaveFrom: "2023-04-12", leaveTo: "2023-04-12"},
    ])

    const columns = [
        {title: "Employee ID",field: "empID", defaultSort: "asc"},
        {title: "Name",field: "name"},
        {title: "Job Role",field: "jobRole"},
        {title: "Leave Type",field: "leaveType", lookup:{C:"Casual", M:"Medical", A:"Annual"},sorting: false},
        {title: "Leave From",field: "leaveFrom",type: "date"},
        {title: "Leave To",field: "leaveTo",type: "date"},
    ]

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
                  icon: () => <Button variant="contained" color="primary">Approve</Button>,
                  tooltip: 'Approve Leave',
                  onClick: (event, rowData) => console.log("Approved")
                },
                {
                    icon: () => <Button variant="contained" color="secondary">Reject</Button>,
                    tooltip: 'Reject Leave',
                    onClick: (event, rowData) => console.log("Rejected")
                },
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
                  exportFileName:"Monthly Leave Report",
                  actionsColumnIndex:-1
                }
              } 
              title="Employee Leaves" 
            />
        </div>
       {/* </Container> */}
    </section>

  );
}

export default EmployeeLeave;