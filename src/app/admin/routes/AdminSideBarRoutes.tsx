import React from 'react';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import { routes } from '../../../common/routes/routes';
import { TRANSLATE } from '../../../common/constants/TranslateConstants';

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

export interface SideBarRoute {
  path: string;
  name: string;
  icon?: JSX.Element;
  submenu?: SideBarRoute[];
}

export const AdminSideBarRoutes: SideBarRoute[] = [
  {
    path: routes.admin.dashboard.fullPath,
    name: TRANSLATE.DASHBOARD,
    // icon: <Squares2X2Icon className={iconClasses} />,
  },
  {
    path: '',
    // icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Products',
    submenu: [
      {
        path: routes.admin.groups.fullPath,
        name: 'groups',
      },
      {
        path: routes.admin.units.fullPath,
        name: 'units',
      },
      {
        path: routes.admin.products.fullPath,
        name: 'products',
      },
      {
        path: routes.admin.additions.fullPath,
        name: 'additions',
      },
    ]
  },
  {
    path: '',
    // icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Requests',
    submenu: [
      {
        path: routes.admin.tables.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'tables',
      },
      {
        path: routes.admin.delivery.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'delivery',
      },
    ]
  },
  {
    path: '',
    // icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Sales',
    submenu: [
      {
        path: routes.admin.customers.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'customers',
      },
      {
        path: routes.admin.salesBills.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'sales-bills',
      },
      {
        path: routes.admin.bouncedSales.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'bounced-sales',
      },
    ]
  },
  {
    path: '',
    // icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'Purchases',
    submenu: [
      {
        path: routes.admin.suppliers.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'suppliers',
      },
      {
        path: routes.admin.purchasesBills.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'purchases-bill',
      },
      {
        path: routes.admin.bouncedPurchases.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'bounced-purchases',
      },
      {
        path: routes.admin.expenses.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'expenses',
      },
    ]
  },
  {
    path: '',
    // icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'personnel',
    submenu: [
      {
        path: routes.admin.employees.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'employees',
      },
      {
        path: routes.admin.professions.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'professions',
      },
    ]
  },
  {
    path: routes.admin.payments.fullPath,
    name: 'payments',
    // icon: <Squares2X2Icon className={iconClasses} />,
  },
  {
    path: '',
    // icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    name: 'reports',
    submenu: [
      {
        path: routes.admin.productsReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'products-reports',
      },
      {
        path: routes.admin.salesReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'sales-reports',
      },
      {
        path: routes.admin.clientStatementsReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'clients-statements-reports',
      },
      {
        path: routes.admin.valueAddedReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'value-added-reports',
      },
      {
        path: routes.admin.tobaccoDutyReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'tobacco-duty-reports',
      },
      {
        path: routes.admin.purchasesReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'purchases-reports',
      },
      {
        path: routes.admin.suppliersStatementsReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'suppliers-statements-reports',
      },
      {
        path: routes.admin.expensesReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'expenses-reports',
      },
      {
        path: routes.admin.paymentsReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'payments-reports',
      },
      {
        path: routes.admin.deliveryReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'delivery-reports',
      },
      {
        path: routes.admin.employeesReports.fullPath,
        // icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
        name: 'employees-reports',
      },
    ]
  },
  {
    path: routes.admin.members.fullPath,
    name: 'members',
    // icon: <Squares2X2Icon className={iconClasses} />,
  },
];
