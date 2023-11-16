import React from 'react';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import { routes } from '../routes/routes';
import { TRANSLATE } from './translateConstants';

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

export interface SideBarRoute {
  path: string;
  name: string;
  icon: JSX.Element;
  submenu?: SideBarRoute[];
}

export const sideBarRoutes: SideBarRoute[] = [
  {
    path: routes.admin.dashboard.fullPath,
    name: TRANSLATE.DASHBOARD,
    icon: <Squares2X2Icon className={iconClasses} />,
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Products',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Add a group',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Add a product',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Measurement units',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Categories',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Additions',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Types of requests',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Tables',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Delivery services',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'The sales',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Customers',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Sales bill',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Bounced sales invoice',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Purchases',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Supplier',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Purchases bill',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Return invoice for purchases',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Expenses',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Personnel',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Add an employee',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Add a profession',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Payment methods',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Add a payment method',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Reports',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Item reports',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Sales report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Client account statement',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Value added tax report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Tobacco duty report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Purchasing report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Supplier account statement',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Expense report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Payment methods report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Delivery service fee report',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Employee salaries report',
      },
    ]
  },
  {
    path: '',
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Members',
    submenu: [
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Add a member',
      },
      {
        path: routes.admin.dashboard.fullPath,
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'Permissions',
      },
    ]
  },
];
