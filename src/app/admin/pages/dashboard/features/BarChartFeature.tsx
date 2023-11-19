import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import TitleCardComponent from '../../../../../common/components/TitleCardComponent'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function BarChartFeature() {
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
        label: 'Store 1',
        data: labels.map(() => {
          return Math.random() * 1000 + 500
        }),
        backgroundColor: 'rgba(255, 99, 132, 1)'
      },
      {
        label: 'Store 2',
        data: labels.map(() => {
          return Math.random() * 1000 + 500
        }),
        backgroundColor: 'rgba(53, 162, 235, 1)'
      }
    ]
  }

  return (
    <TitleCardComponent title={'Revenue'}>
      <Bar
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            }
          }
        }}
        data={data}
      />
    </TitleCardComponent>
  )
}

export default BarChartFeature
