
import React from "react";
import Chart from "react-apexcharts"
import 'apexcharts/dist/apexcharts.css';

function InstructorPieChart()
{
    return(
        <React.Fragment>
            <div classname="container-fluid">
            <Chart
                type="pie"
                width={1349}
                height={550}
                series={[4.5, 4, 3.7, 4.7,3.5]}
                options={{
                    noData: { text: "Empty Data" },
                    labels: ['Mr. Leanne Graham', 'Mr. Ervin Howell', 'Mr. Kurtis Weissnat', 'Mr. Glenna Reichert','Mr. Nicholas Runolfsdottir V'],
                    legend: {
                        show:true,
                        labels: {
                             
                                colors: "lightgrey",
                                useSeriesColors:false,
                                fontSize:"14px"
                            
                        },
                    },
                }}
            />
            </div>
        </React.Fragment>
    );
}

export default InstructorPieChart;
