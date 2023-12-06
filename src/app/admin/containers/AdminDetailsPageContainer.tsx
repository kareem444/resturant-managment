import React, { useState } from 'react'
import TitleCardComponent from '../../../common/components/TitleCardComponent'
import SearchComponent from '../../../common/components/SearchComponent'
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
            topMargin={'mt-2 h-5/6 overflow-y-hidden flex-1' + ' ' + className}
            TopSideButtons={
                <SearchComponent
                    filter={{ items: tableContent.header, showFilterBadge: true }}
                    update={{
                        items: tableContent.items,
                        onUpdateState: setSearchedItems
                    }}
                />
            }
        >
            <TableComponent {...tableContent} items={searchedItems} />
        </TitleCardComponent>
    )
}
