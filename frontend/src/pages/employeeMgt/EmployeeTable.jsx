import MaterialTable, { MTableToolbar, MTableHeader } from 'material-table'
import { useState, useEffect} from 'react';
import { Container} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../../Styles/employee/EmployeeTable.css'
import axios from 'axios';
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

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


function EmployeeTable() {

    const [tableData, setTableData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [query, setQuery] = useState('')

    const columns = [
        {title: "userId", field: "userId", hidden: true},
        {title: "Employee ID", field: "_id", defaultSort: "asc"},
        {title: "Name", field: "firstName"},
        {title: "Email", field: "email", sorting: false, export: false},
        {title: "Job Role", field: "role"},
        {title: "Salary", field: "totalSal", type: "currency", currencySetting:{currencyCode: "LKR"}}
    ]

    useEffect(()=>{
      fetch("http://localhost:5000/employee/getEmployee")
      .then(resp=>resp.json())
      .then(resp=>{
        console.log(resp)
        setTableData(resp)
        setFilterData(resp)
      })
    },[])

    const navigate = useNavigate();

    const editEmployee = (id) => {
      navigate(`/employeeUpdate/${id}`);
    };
    const addEmployee = () => {
      navigate('/employeeRegister');
    };
    const removeEmployee = (id) => {
      axios.delete(`http://localhost:5000/employee/deleteEmployee/${id}`)
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

    function Salary(props) {

      // if (props.totalSal == 0) {
        return (
          <Button variant="contained" color="primary" class="editBtn">
            Salary
          </Button>
        );
      // }else {
      //   return (
      //     <Button variant="contained" color="primary" class="editBtn">
      //       Edit Salary
      //     </Button>
      //   );
      // }
    }

    function salaryNavigate(rowData){
      if (rowData.totalSal == 0)
        navigate(`/employeeSalary/${rowData._id}`);
      else
        navigate(`/employeeSalaryUpdate/${rowData._id}`);
    }

    // const addSalary = (id) => {
    //   navigate(`/employeeSalary/${id}`);
    // };

    // const editSalary = (id) => {
    //   navigate(`/employeeSalaryUpdate/${id}`);
    // };


    const handleSearch = (event) => {
        const getSearch = event.target.value

        if(getSearch.length > 0) {
          const searchData = tableData.filter((values) => {
            return Object.values(values).some((value) => {
              if (typeof value === 'number') {
                // Convert number to string before searching
                return value.toString().toLowerCase().includes(getSearch);
              } else if (typeof value === 'string') {
                return value.toLowerCase().includes(getSearch);
              }
              return false;
            });
          });
          setTableData(searchData)
        }else{
          setTableData(filterData)
        }
        setQuery(getSearch)
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
          {/* <button
            onClick={handleSearch}
            style={{backgroundColor: 'blue', color: 'white', borderRadius: 5, border: 'none', padding: '10px 20px'}}
          >
            Search
          </button> */}
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
      const title = "Employee Summary";
      const headers = [["Employee ID", "Name", "Job Role", "Salary"]];
      const data = tableData.map((employee) => [employee._id, employee.firstName, employee.role, employee.totalSal]);
      let content = {
        startY: 50,
        head: headers,
        body: data,
      };
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("employee-summary.pdf");
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

              // components={{
              //   Toolbar: props => (
              //     <div>
              //       <MTableToolbar {...props} />
              //       <div style={{padding: '0px 18px 10px'}}>
              //       <CustomSearch />
              //       </div>
              //     </div>
              //   ),
              // }}

              components={{
                Toolbar: () => (
                  <div>
                    <div className="MuiToolbar-root MuiToolbar-regular MTableToolbar-root-20 MuiToolbar-gutters">
                      <div className="MTableToolbar-title-24">
                        <h6 className="MuiTypography-root MuiTypography-h6" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Employee Summary</h6>
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
                            <span>
                              <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabindex="0" type="button" title="Add Employee" onClick={addEmployee}>
                                <span className="MuiIconButton-label">
                                  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
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

              // components={{
              //   Toolbar: (props) => (
              //     <div>
              //       <div style={{ display: "flex"}}>
              //         <CustomSearch onSearch={props.onSearch} />
              //       </div>
              //       <props.components.Toolbar {...props} />
              //     </div>
              //   ),
              // }}
              // onSearchChanged={handleSearch}

              actions={[
                // {
                //   icon: tableIcons.Add,
                //   tooltip: 'Add Employee',
                //   onClick: (event, rowData) => addEmployee(),
                //   isFreeAction: true
                // },
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
                  icon: rowData => <Salary totalSal={rowData.totalSal}/>,
                  tooltip: 'Salary',
                  onClick: (event, rowData) => salaryNavigate(rowData)
                }
              ]}
              
              options={
                {
                  sorting:true,
                  search:false, 
                  //searchFieldVariant:"outlined",
                  pageSizeOptions:[5,10,20,50,100], 
                  pageSize:5,
                  paginationType:"stepped",
                  //exportButton:true,
                  exportAllData:true,
                  exportFileName:"Monthly Salary Report",
                  actionsColumnIndex:-1,

                  headerStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    backgroundColor: '#001933'
                  }
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