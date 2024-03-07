import React, { useEffect, useState } from 'react'
import TitleCardComponent from '../../../common/components/TitleCardComponent'
import {
    ITableContent,
    TableComponent
} from '../../../common/components/TableComponent'
import usePageTitle from '../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../common/hooks/useTranslate'
import { TRANSLATE } from '../../../common/constants/TranslateConstants'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { useLocation } from 'react-router-dom'

export interface IAdminDetailsPageContainerProps {
    tableContent: ITableContent
    className?: string
    onRefresh?: () => void
    onPrint?: () => void
    onPdf?: () => void
    onWhatsapp?: () => void
}

export const AdminDetailsPageContainer: React.FC<
    IAdminDetailsPageContainerProps
> = ({ tableContent, className, onRefresh, onPrint, onPdf, onWhatsapp }) => {
    const { title } = usePageTitle()
    const { translate, isArabic } = useTranslate()
    const { pathname } = useLocation()
    const [isInit, setIsInit] = useState(false)
    const { state: searchedItems, setState } = useEchoState<any[] | undefined>(EchoStateConstants.searchedItems)

    useEffect(() => {
        setState(tableContent.items)
        setIsInit(true)
    }, [pathname])

    const data = isInit ? (searchedItems ?? tableContent.items ?? []) : []

    return (
        <TitleCardComponent
            title={isArabic ? `${translate(TRANSLATE.DETAILS)} ${title} ` : `${title} ${translate(TRANSLATE.DETAILS)}`}
            topMargin={'h-full overflow-y-hidden flex-1' + ' ' + className}
            onRefreshDataButtonClick={onRefresh}
            onPrintButtonClick={onPrint}
            onPdfButtonClick={onPdf}
            onWhatsappButtonClick={onWhatsapp}
        >
            <TableComponent {...tableContent} items={data || []} />
        </TitleCardComponent>
    )
}
