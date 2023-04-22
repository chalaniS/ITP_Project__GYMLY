import Chart from "react-apexcharts"

const PromoGraph = ({ series, labels }) => {

    return(
        <Chart type="pie"
        series={series}
        options={{
            noData: {text: "No data to display"},
            labels: labels,
            legend: {
                show: true,
                position: "bottom",
                labels: {
                    colors: "lightgrey",
                    useSeriesColors: false,
                    style: {
                        fontSize: "20px",
                    },
                },
            },
        }}
        >   
        </Chart>
    )
}

export default PromoGraph