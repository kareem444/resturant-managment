import React, { useState } from 'react'
import TitleCardComponent from '../../../common/components/TitleCardComponent'
import SearchComponent from '../../../common/components/SearchComponent'
import { ITableContent, TableComponent } from '../../../common/components/TableComponent'
import usePageTitle from '../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../common/constants/TranslateConstants'

export const AdminDetailsPageContainer: React.FC<{
    tableContent: ITableContent
}> = ({ tableContent }) => {
    const [searchedItems, setSearchedItems] = useState(tableContent.items)
    const { title } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <TitleCardComponent
            title={`${title} ${translate(TRANSLATE.DETAILS)}`}
            topMargin='mt-2'
            TopSideButtons={
                <SearchComponent
                    filter={{ items: tableContent.header, showFilterBadge: true }}
                    update={{ items: tableContent.items, onUpdateState: setSearchedItems }}
                />
            }
        >
            <TableComponent {...tableContent} items={searchedItems} />
        </TitleCardComponent>
    )
}
