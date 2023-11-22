import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import ShoppingCart from '@heroicons/react/24/outline/ShoppingCartIcon'

const PosOrderTopButtonsComponent = () => {
    return (
        <div className='p-3 flex justify-between h-14 w-full'>
            <div className='indicator'>
                <ShoppingCart className='w-8' />
                {
                    <span className='indicator-item badge badge-info text-white badge-sm'>
                        3
                    </span>
                }
            </div>
            <TrashIcon className='w-8' />
        </div>
    )
};

export default PosOrderTopButtonsComponent;
