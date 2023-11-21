import { routes } from '../../../common/routes/routes';
import {ReactComponent as DeliveryIcon} from '../../../common/assets/svg/fast-delivery.svg';
import {ReactComponent as TableIcon} from '../../../common/assets/svg/table.svg';
import {ReactComponent as InvoiceIcon} from '../../../common/assets/svg/document.svg';

export interface SideBarRoute {
  path: string;
  name?: string;
  icon: JSX.Element;
}

export const PosDrawerRoutes: SideBarRoute[] = [
  {
    path: routes.pos.home.fullPath,
    // name: TRANSLATE.DASHBOARD,
    icon: <TableIcon className='h-12'/>,
  },
  {
    path: "",
    // name: TRANSLATE.DASHBOARD,
    icon: <DeliveryIcon className='h-12'/>,
  },
  {
    path: "",
    // name: TRANSLATE.DASHBOARD,
    icon: <InvoiceIcon className='h-12'/>,
  },
  {
    path: "",
    // name: TRANSLATE.DASHBOARD,
    icon: <i className="fi fi-rr-power text-2xl hover:scale-105 " />,
  },
];
