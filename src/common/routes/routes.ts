import { lazy } from 'react'
import UnitsPage from '../../app/admin/units'
import ProductsPage from '../../app/admin/products'
import AdditionsPage from '../../app/admin/additions'
import TablesPage from '../../app/admin/tables'
import DeliveryPage from '../../app/admin/delivary'
import CustomersPage from '../../app/admin/customers'
import SalesBillsPage from '../../app/admin/salesBills'
import BouncedSalesPage from '../../app/admin/bouncedSales'
import SuppliersPage from '../../app/admin/subbliers'
import PurchasesBillsPage from '../../app/admin/purchasesBills'
import BouncedPurchasesPage from '../../app/admin/bouncedPurchases'
import ExpensesPage from '../../app/admin/expenses'
import EmployeesPage from '../../app/admin/employees'
import ProfessionsPage from '../../app/admin/profession'
import PaymentsPage from '../../app/admin/payments'
import MembersPage from '../../app/admin/members'
import ProductsReportsPage from '../../app/admin/productsReports'
import SalesReportsPage from '../../app/admin/salesReports'
import ClientsStatementsReportsPage from '../../app/admin/clientsStatments'
import ValueAddedReportsPage from '../../app/admin/valueAddedTaxReports'
import TobaccoDutyReportsPage from '../../app/admin/tobaccoDutyReports'
import PurchasesReportsPage from '../../app/admin/purchasesReports'
import SuppliersStatementsReportsPage from '../../app/admin/suppliersStatments'
import ExpensesReportsPage from '../../app/admin/expensesReports'
import PaymentsReportsPage from '../../app/admin/paymentsReports'
import DeliveryReportsPage from '../../app/admin/deliveryReports'
import EmployeesReportsPage from '../../app/admin/employeesReports'

// const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const LoginPage = lazy(() => import('../../app/auth/login'))
const RegisterPage = lazy(() => import('../../app/auth/register'))
const ForgotPasswordPage = lazy(() => import('../../app/auth/forgotPassword'))
const OtpPage = lazy(() => import('../../app/auth/otp'))
const LayoutContainer = lazy(() => import('../containers/LayoutContainer'))
const DashBoardPage = lazy(() => import('../../app/admin/dashboard'))
const GroupsPage = lazy(() => import('../../app/admin/groups'))

export const routes = {
    login: {
        path: '/login',
        component: LoginPage
    },
    forgotPassword: {
        path: '/forgot-password',
        component: ForgotPasswordPage
    },
    register: {
        path: '/register',
        component: RegisterPage
    },
    otp: {
        path: '/otp',
        component: OtpPage
    },
    layout: {
        path: '/app/*',
        component: LayoutContainer
    },
    admin: {
        dashboard: {
            path: '/admin/dashboard',
            fullPath: '/app/admin/dashboard',
            component: DashBoardPage
        },
        groups: {
            path: '/admin/groups',
            fullPath: '/app/admin/groups',
            component: GroupsPage
        },
        units: {
            path: '/admin/units',
            fullPath: '/app/admin/units',
            component: UnitsPage
        },
        products: {
            path: '/admin/products',
            fullPath: '/app/admin/products',
            component: ProductsPage
        },
        additions: {
            path: '/admin/additions',
            fullPath: '/app/admin/additions',
            component: AdditionsPage
        },
        tables: {
            path: '/admin/tables',
            fullPath: '/app/admin/tables',
            component: TablesPage
        },
        delivery: {
            path: '/admin/delivery',
            fullPath: '/app/admin/delivery',
            component: DeliveryPage
        },
        customers: {
            path: '/admin/customers',
            fullPath: '/app/admin/customers',
            component: CustomersPage
        },
        salesBills: {
            path: '/admin/sales-bills',
            fullPath: '/app/admin/sales-bills',
            component: SalesBillsPage
        },
        bouncedSales: {
            path: '/admin/bounced-sales',
            fullPath: '/app/admin/bounced-sales',
            component: BouncedSalesPage
        },
        suppliers: {
            path: '/admin/suppliers',
            fullPath: '/app/admin/suppliers',
            component: SuppliersPage
        },
        purchasesBills: {
            path: '/admin/purchases-bills',
            fullPath: '/app/admin/purchases-bills',
            component: PurchasesBillsPage
        },
        bouncedPurchases: {
            path: '/admin/bounced-purchases',
            fullPath: '/app/admin/bounced-purchases',
            component: BouncedPurchasesPage
        },
        expenses: {
            path: '/admin/expenses',
            fullPath: '/app/admin/expenses',
            component: ExpensesPage
        },
        employees: {
            path: '/admin/employees',
            fullPath: '/app/admin/employees',
            component: EmployeesPage
        },
        professions: {
            path: '/admin/professions',
            fullPath: '/app/admin/professions',
            component: ProfessionsPage
        },
        payments: {
            path: '/admin/payments',
            fullPath: '/app/admin/payments',
            component: PaymentsPage
        },
        members: {
            path: '/admin/members',
            fullPath: '/app/admin/members',
            component: MembersPage
        },
        productsReports: {
            path: '/admin/products-reports',
            fullPath: '/app/admin/products-reports',
            component: ProductsReportsPage
        },
        salesReports: {
            path: '/admin/sales-reports',
            fullPath: '/app/admin/sales-reports',
            component: SalesReportsPage
        },
        clientStatementsReports: {
            path: '/admin/clients-statements-reports',
            fullPath: '/app/admin/clients-statements-reports',
            component: ClientsStatementsReportsPage
        },
        valueAddedReports: {
            path: '/admin/value-added-reports',
            fullPath: '/app/admin/value-added-reports',
            component: ValueAddedReportsPage
        },
        tobaccoDutyReports: {
            path: '/admin/tobacco-duty-reports',
            fullPath: '/app/admin/tobacco-duty-reports',
            component: TobaccoDutyReportsPage
        },
        purchasesReports: {
            path: '/admin/purchases-reports',
            fullPath: '/app/admin/purchases-reports',
            component: PurchasesReportsPage
        },
        suppliersStatementsReports: {
            path: '/admin/suppliers-statements-reports',
            fullPath: '/app/admin/suppliers-statements-reports',
            component: SuppliersStatementsReportsPage
        },
        expensesReports: {
            path: '/admin/expenses-reports',
            fullPath: '/app/admin/expenses-reports',
            component: ExpensesReportsPage
        },
        paymentsReports: {
            path: '/admin/payments-reports',
            fullPath: '/app/admin/payments-reports',
            component: PaymentsReportsPage
        },
        deliveryReports: {
            path: '/admin/delivery-reports',
            fullPath: '/app/admin/delivery-reports',
            component: DeliveryReportsPage
        },
        employeesReports: {
            path: '/admin/employees-reports',
            fullPath: '/app/admin/employees-reports',
            component: EmployeesReportsPage
        }, 
    }
}
