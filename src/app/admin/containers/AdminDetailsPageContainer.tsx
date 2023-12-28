import React, { useState } from 'react'
import TitleCardComponent from '../../../common/components/TitleCardComponent'
import FilterComponent from '../../../common/components/FilterComponent'
import {
    ITableContent,
    TableComponent
} from '../../../common/components/TableComponent'
import usePageTitle from '../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../common/constants/TranslateConstants'

interface IAdminDetailsPageContainerProps {
    tableContent: ITableContent
    className?: string
}

export const AdminDetailsPageContainer: React.FC<
    IAdminDetailsPageContainerProps
> = ({ tableContent, className }) => {
    const [searchedItems, setSearchedItems] = useState(tableContent.items)
    const { title } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <TitleCardComponent
            title={`${title} ${translate(TRANSLATE.DETAILS)}`}
            topMargin={'h-full overflow-y-hidden flex-1' + ' ' + className}
            TopSideButtons={
                !!tableContent.filter && (
                    <FilterComponent
                        filter={{
                            items: tableContent.filter,
                            showFilterBadge: true,
                            defaultFilterItem: tableContent.defaultFilterItem,
                            showFilterDropButton: tableContent.showFilterDropDown
                        }}
                        update={{
                            items: tableContent.items,
                            onUpdateState: setSearchedItems
                        }}
                    />
                )
            }
        >
            <TableComponent {...tableContent} items={searchedItems} />
        </TitleCardComponent>
    )
}
