import React, { useState } from 'react'
import TitleCardComponent from '../components/TitleCardComponent'
import SearchComponent from '../components/SearchComponent'
import { ITableContent, TableComponent } from '../components/TableComponent'
import usePageTitle from '../hooks/usePageTitle'
import { useTranslate } from '../hooks/useTranslate'
import { TRANSLATE } from '../constants/translateConstants'

export const DetailsPageContainer: React.FC<{
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
