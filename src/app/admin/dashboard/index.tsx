import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import DashboardTopBarFeature from './features/DashboardTopBarFeature'
import DashboardStatsFeature, { DashboardStatsProps } from './features/DashboardStatsFeature'
import LineChartFeature from './features/LineChartFeature'
import BarChartFeature from './features/BarChartFeature'
import AmountStatsFeature from './features/AmountStatsFeature'
import PageStatsFeature from './features/PageStatsFeature'
import UserChannelsFeature from './features/UserChannelsFeature'
import DoughnutChartFeature from './features/DoughnutChartFeature'

function DashBoardPage() {
    const statsData: DashboardStatsProps[] = [
        { title: "New Users", value: "34.7k", icon: <UserGroupIcon className='w-8 h-8' />, description: "↗︎ 2300 (22%)" },
        { title: "Total Sales", value: "$34,545", icon: <CreditCardIcon className='w-8 h-8' />, description: "Current month" },
        { title: "Pending Leads", value: "450", icon: <CircleStackIcon className='w-8 h-8' />, description: "50 in hot leads" },
        { title: "Active Users", value: "5.6k", icon: <UsersIcon className='w-8 h-8' />, description: "↙ 300 (18%)" },
    ]

    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBarFeature
            // updateDashboardPeriod={updateDashboardPeriod}
            />

            {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStatsFeature key={k} {...d} colorIndex={k} />
                        )
                    })
                }
            </div>

            {/** ---------------------- Different charts ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChartFeature />
                <BarChartFeature />
            </div>

            {/** ---------------------- Different stats content 2 ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStatsFeature />
                <PageStatsFeature />
            </div>

            {/** ---------------------- User source channels table  ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannelsFeature />
                <DoughnutChartFeature />
            </div>
        </>
    )
}

export default DashBoardPage