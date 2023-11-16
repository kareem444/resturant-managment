import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import TitleCardComponent from '../../../../common/components/TitleCardComponent'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

function LineChartFeature() {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'MAU',
        data: labels.map(() => {
          return Math.random() * 100 + 500
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return (
    <TitleCardComponent title={'Montly Active Users (in K)'}>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            }
          }
        }}
      />
    </TitleCardComponent>
  )
}

export default LineChartFeature
