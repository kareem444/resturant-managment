import PosOrderItemComponent from 'src/app/pos/components/PosOrderItemComponent'
import { RECENT_TRANSACTIONS } from 'src/unUsed/utils/dummyData'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

export default function PosOrderItemsFeature() {
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => console.info('swipe action triggered')}
                destructive={true}
            >
                <div className='bg-red-400 text-white m-2 flex items-center justify-start'>
                    <i className='fi fi-rs-trash text-2xl' />
                </div>
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={() => console.info('swipe action triggered')}
            >
                <div className='bg-red-400 text-white m-2 flex items-center justify-start'>
                    <i className='fi fi-rs-trash text-2xl' />
                </div>
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <>
            {
                <SwipeableList className=''>
                    {RECENT_TRANSACTIONS.map((item, index) => (
                        <SwipeableListItem
                            leadingActions={leadingActions()}
                            trailingActions={trailingActions()}
                            key={index}
                        >
                            <PosOrderItemComponent />
                        </SwipeableListItem>
                    ))}
                </SwipeableList>
            }
        </>
    )
}
