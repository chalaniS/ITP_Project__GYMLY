import MaterialTable from 'material-table'
import { useState } from 'react';
import { Container} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import '../../Styles/employee/EmployeeTable.css'
import '../../Styles/employee/EmployeeLeave.css'


import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
      opacity: 0.83,
      color: "white"
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "none"
    },
    "& .MuiTableRow-root:nth-of-type(odd)": {
      backgroundColor: "#212529"
    },
    "& .MuiTableRow-root:nth-of-type(even)": {
      backgroundColor: "#2c3034"
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
    const [filterData, setFilterData] = useState([])
    const [query, setQuery] = useState('')

    const columns = [
        {title: "Employee ID",field: "empID", defaultSort: "asc"},
        {title: "Name",field: "name"},
        {title: "Job Role",field: "jobRole"},
        {title: "Leave Type",field: "leaveType", lookup:{C:"Casual", M:"Medical", A:"Annual"},sorting: false},
        {title: "Leave From",field: "leaveFrom",type: "date"},
        {title: "Leave To",field: "leaveTo",type: "date"},
    ]

    const handleSearch = (event) => {
      // const getSearch = event.target.value

      // if(getSearch.length > 0) {
      //   const searchData = tableData.filter((values) => {
      //     return Object.values(values).some((value) => {
      //       if (typeof value === 'number') {
      //         // Convert number to string before searching
      //         return value.toString().toLowerCase().includes(getSearch);
      //       } else if (typeof value === 'string') {
      //         return value.toLowerCase().includes(getSearch);
      //       }
      //       return false;
      //     });
      //   });
      //   setTableData(searchData)
      // }else{
      //   setTableData(filterData)
      // }
      // setQuery(getSearch)
  }

    const CustomSearch = () => {
      
      return (
        <div style={{display: 'flex'}}>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e)}
            placeholder="Search"
            autoFocus onclick="this.select();"
            style={{padding: 5, borderRadius: 5, border: '1px solid gray', marginRight: 10}}
          />
        </div>
      )
    }

    const generatePDF = () => {
      const unit = "pt";
      const size = "A4"; 
      const orientation = "landscape"; 
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);
      doc.setFontSize(15);
      const title = "Employee Leaves";
      const headers = [["Employee ID", "Name", "Job Role", "Leave Type", "Leave From", "Leave To"]];
      const data = tableData.map((employee) => [employee.empID, employee.name, employee.jobRole, employee.leaveType, employee.leaveFrom, employee.leaveTo]);
      let content = {
        startY: 50,
        head: headers,
        body: data,
      };
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("employee-leaves.pdf");
    };

    const classes = useStyles();

  return (

    <section>
       {/* <Container> */}
        <div className={classes.tableContainer}>
            <MaterialTable className="transparent-table"
              icons={tableIcons} 
              columns={columns} 
              data={tableData}

              components={{
                Toolbar: () => (
                  <div>
                    <div className="MuiToolbar-root MuiToolbar-regular MTableToolbar-root-20 MuiToolbar-gutters">
                      <div className="MTableToolbar-title-24">
                        <h6 className="MuiTypography-root MuiTypography-h6" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Employee Leaves</h6>
                      </div>
                      <div className="MTableToolbar-spacer-22">
                      </div>
                      <div>
                        <CustomSearch />
                      </div>
                      <div className="MTableToolbar-actions-23">
                        <div>
                          <div>
                            <span>
                              <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabindex="0" type="button" aria-label="Export" title="Export" onClick={generatePDF}>
                                <span className="MuiIconButton-label">
                                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path>
                                  </svg>
                                </span>
                                <span className="MuiTouchRipple-root"></span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              }}

              actions={[
                {
                  icon: () => <Button variant="contained" color="primary" class="approveBtn">Approve</Button>,
                  tooltip: 'Approve Leave',
                  onClick: (event, rowData) => console.log("Approved")
                },
                {
                    icon: () => <Button variant="contained" color="secondary" class="rejectBtn">Reject</Button>,
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
                  //exportButton:true,
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