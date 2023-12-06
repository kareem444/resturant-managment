import AccordionComponent from 'src/common/components/AccordionComponent'
import PosImmediateDiscountComponent from './PosImmediateDiscountComponent'
import PosPreDeterminedDiscountComponent from './PosPreDeterminedDiscountComponent'

const accordionData = [
    {
        title: 'Pre-determined Discount',
        component: <PosPreDeterminedDiscountComponent />
    },
    {
        title: 'Immediate Discount',
        component: <PosImmediateDiscountComponent />
    },
]

const PosDiscountModalComponent = () => {
    return (
        <>
            <AccordionComponent
                data={accordionData}
                className='text-slate-500'
            />
        </>
    )
}

export default PosDiscountModalComponent
