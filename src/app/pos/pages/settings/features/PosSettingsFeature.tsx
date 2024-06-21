import AccordionComponent from 'src/common/components/AccordionComponent'
import PosPrintersComponent from '../components/printer/PosPrintersComponent'
import { memo } from 'react'

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

export default memo(PosSettingsFeature)
