import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler } from 'chart.js'
import "./chart.css"

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler)

export default function Chart() {
  const data = {
    labels: ['Liderazgo', 'Trabajo en Equipo', 'Comunicacion', 'Resolucion de Problemas', 'Creatividad'],
    datasets: [{
      label: 'Soft Skills',
      data: [90, 100, 70, 90, 70],
      backgroundColor: 'rgba(150, 150, 255, 0.5)',
      borderWidth: 1,
      borderColor: 'rgb(56, 189, 248)',
    }]
  }

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          color: 'white'
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 14,
            weight: 'bold'
          }
        },

        ticks: {
          color: '#2e2e52',
          backdropColor: "rgba(27, 27, 50, 0)",
          backdropPadding: 5,
          showLabelBackdrop: true,
          textStrokeColor: 'white',
          textStrokeWidth: 1,
          font: {
            size: 14,
            weight: 'bold'
          },
          z: 55
        },

      }
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: 'white',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    },
    layout: {
      padding: {
        bottom: 0,
        top: 0,
        right: 0
      },
      top: 0,
    }
  }

  const styleChart = {
    display: "flex"
  }

  const styleContainer = {
    height: "420px",
    width: "420px",
    position: "absolute",
  }
  return (

    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", height: "100%" }}>
      <h2 style={{ color: "white" }}>Soft Skills</h2>
      <div className="chart-container">
        <Radar data={data} options={options} style={styleChart}></Radar>
      </div>

    </div>
  )
}