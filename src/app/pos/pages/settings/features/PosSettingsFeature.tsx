import AccordionComponent from 'src/common/components/AccordionComponent'
import PosGeneralSettingsComponents from '../components/PosGeneralSettingsComponents'
import PosPrintersComponent from '../components/PosPrintersComponent'

const data = [
    {
        title: 'Printers Settings',
        component: <PosPrintersComponent />
    },
]

const PosSettingsFeature = () => {
    return (
        <AccordionComponent data={data} />
    )
}

export default PosSettingsFeature
