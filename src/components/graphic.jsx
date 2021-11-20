import { useTheme } from '@mui/material/';
import { Line } from 'react-chartjs-2'

const Graphic = () => {
    const { palette } = useTheme()
    const { primary } = palette
    const points = [
        35,//1
        40,//2
        40,//2
        35,//3
        33,//4
        34,//4
        44,//5
        46,//5
        40,//6
        35,//7
        35,//7
        45,//8
    ].map(n => n - 25)
    const data = () => {

        return {
            labels: Array(points.length).fill(''),
            datasets: [
                {
                    backgroundColor: 'transparent',
                    borderColor: primary.main,
                    borderWidth: 2,
                    data: points,
                    tension: 0.35,
                    pointRadius: 0,
                    pointHitRadius: 1000,
                    pointHoverBackgroundColor: 'white',
                    pointHoverBorderColor: 'white'
                }
            ],
        }
    }

    const tooltipLine = {
        beforeDraw: chart => {

            const { ctx } = chart;
            let _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = 'yellow';
                ctx.shadowBlur = 50;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 20
                ctx.barShowStroke = false
                ctx.scaleShowGridLines = false
                _stroke.apply(this, arguments)
                ctx.restore();
            }
            if (chart.tooltip._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0]
                ctx.beginPath()
                ctx.moveTo(activePoint.element.x, activePoint.element.y)
                ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
                ctx.lineWidth = 0.5;
                ctx.strokeStyle = 'white'
                ctx.stroke()
                ctx.restore()
            }
        }
    }

    return (
        <Line
            data={data}
            options={{
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false
                        },
                        display: false,
                    },
                    x: {
                        grid: {
                            display: false
                        },
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        bottom: 10,
                    },
                },
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        display: false,
                    },

                }
            }}
            plugins={[tooltipLine, {
                borderColor: 'red',
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 2,
            }]}
            style={{ height: '15rem' }}
        />
    )
}

export default Graphic