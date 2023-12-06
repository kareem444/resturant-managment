import { ReactComponent as DeliveryIcon } from '../../../common/assets/svg/fast-delivery.svg'
import { ReactComponent as TableIcon } from '../../../common/assets/svg/table.svg'
import { ReactComponent as InvoiceIcon } from '../../../common/assets/svg/document.svg'
import { PosRoutes } from './PosRoutes'
import SvgButtonComponent from 'src/common/components/SvgButtonComponent'

export interface SideBarRoute {
  path: string
  icon: JSX.Element
}

export const PosDrawerRoutes: SideBarRoute[] = [
  {
    path: PosRoutes.withOrderSection.tables.fullPath,
    icon: (
      <SvgButtonComponent
        normalFillColor='white'
        activeFillColor='rgb(100, 116, 139)'
        activePath={PosRoutes.withOrderSection.tables.fullPath}
        SvgIcon={TableIcon}
      />
    )
  },
  {
    path: PosRoutes.withOrderSection.delivery.fullPath,
    icon: (
      <SvgButtonComponent
        normalFillColor='white'
        activeFillColor='rgb(100, 116, 139)'
        activePath={PosRoutes.withOrderSection.delivery.fullPath}
        SvgIcon={DeliveryIcon}
      />
    )
  },
  {
    path: PosRoutes.withOrderSection.invoice.fullPath,
    icon: <i className='fi fi-rs-copy text-xl'></i>
    // icon: <InvoiceIcon className='h-12' />,
  }
]
