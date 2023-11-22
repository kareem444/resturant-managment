import { ReactComponent as DeliveryIcon } from '../../../common/assets/svg/fast-delivery.svg';
import { ReactComponent as TableIcon } from '../../../common/assets/svg/table.svg';
import { ReactComponent as InvoiceIcon } from '../../../common/assets/svg/document.svg';
import { PosRoutes } from './PosRoutes';

export interface SideBarRoute {
  path: string;
  icon: JSX.Element;
}

export const PosDrawerRoutes: SideBarRoute[] = [
  {
    path: PosRoutes.withOrderSection.tables.fullPath,
    icon: <TableIcon className='h-12' />,
  },
  {
    path: PosRoutes.withOrderSection.delivery.fullPath,
    icon: <DeliveryIcon className='h-12' />,
  },
  {
    path: PosRoutes.withOrderSection.invoice.fullPath,
    icon: <InvoiceIcon className='h-12' />,
  },
];
