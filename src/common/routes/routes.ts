import { lazy } from 'react'

const LoginPage = lazy(() => import('../../app/auth/pages/login'))
const RegisterPage = lazy(() => import('../../app/auth/pages/register'))
const SignUserPage = lazy(() => import('../../app/auth/pages/signUser'))
const ForgotPasswordPage = lazy(
    () => import('../../app/auth/pages/forgotPassword')
)
const OtpPage = lazy(() => import('../../app/auth/pages/otp'))
const LayoutContainer = lazy(() => import('../containers/LayoutContainer'))
const DashBoardPage = lazy(() => import('../../app/admin/pages/dashboard'))
const GroupsPage = lazy(() => import('../../app/admin/pages/groups'))
const SalesBillsPage = lazy(() => import('../../app/admin/pages/salesBills'))
const BouncedSalesPage = lazy(
    () => import('../../app/admin/pages/bouncedSales')
)
const UnitsPage = lazy(() => import('../../app/admin/pages/units'))
const ProductsPage = lazy(() => import('../../app/admin/pages/products'))
const ComboOffersPage = lazy(() => import('../../app/admin/pages/comboOffers'))
const AdditionsPage = lazy(() => import('../../app/admin/pages/additions'))
const TablesPage = lazy(() => import('../../app/admin/pages/tables'))
const DeliveryPage = lazy(() => import('../../app/admin/pages/delivary'))
const CustomersPage = lazy(() => import('../../app/admin/pages/customers'))
const SuppliersPage = lazy(() => import('../../app/admin/pages/subbliers'))
const PurchasesBillsPage = lazy(
    () => import('../../app/admin/pages/purchasesBills')
)
const BouncedPurchasesPage = lazy(
    () => import('../../app/admin/pages/bouncedPurchases')
)
const ExpensesPage = lazy(() => import('../../app/admin/pages/expenses'))
const ExpensesDestinationPage = lazy(() => import('../../app/admin/pages/expensesDestination'))
const PaymentsMethodsPage = lazy(() => import('../../app/admin/pages/paymentsMethods'))
const MembersPage = lazy(() => import('../../app/admin/pages/members'))
const ProductsReportsPage = lazy(
    () => import('../../app/admin/pages/productsReports')
)
const SalesReportsPage = lazy(
    () => import('../../app/admin/pages/salesReports')
)
const ValueAddedReportsPage = lazy(
    () => import('../../app/admin/pages/valueAddedTaxReports')
)
const TobaccoDutyReportsPage = lazy(
    () => import('../../app/admin/pages/tobaccoDutyReports')
)
const PurchasesReportsPage = lazy(
    () => import('../../app/admin/pages/purchasesReports')
)
const ExpensesReportsPage = lazy(
    () => import('../../app/admin/pages/expensesReports')
)
const PaymentsReportsPage = lazy(
    () => import('../../app/admin/pages/paymentsReports')
)
const DeliveryReportsPage = lazy(
    () => import('../../app/admin/pages/deliveryReports')
)
const SettingsPage = lazy(() => import('../../app/admin/pages/settings'))
const BranchesPage = lazy(() => import('src/app/admin/pages/branches'))
const RolesPage = lazy(() => import('src/app/admin/pages/roles'))
const DiscountsPage = lazy(() => import('src/app/admin/pages/discounts'))
const TaxesPage = lazy(() => import('src/app/admin/pages/taxes'))
const ShiftReportsPage = lazy(() => import('src/app/admin/pages/shiftReports'))

const PosHomeLayoutContainer = lazy(
    () => import('src/app/pos/containers/PosHomeLayoutContainer')
)
const PosProductsPage = lazy(() => import('src/app/pos/pages/products'))
const PosDeliveryPage = lazy(() => import('src/app/pos/pages/delivery'))
const PosInvoicePage = lazy(() => import('src/app/pos/pages/invoice'))
const PosSettingsPage = lazy(() => import('src/app/pos/pages/settings'))
const PosTablesPage = lazy(() => import('src/app/pos/pages/tables'))

interface Route {
    path: string
    component: React.ComponentType<any>
}

interface FullRoute extends Route {
    fullPath: string
}

export interface NestedRoutes {
    [key: string]: FullRoute
}

interface Routes {
    login: Route
    forgotPassword: Route
    register: Route
    signUser: Route
    otp: Route
    layout: Route
    admin: NestedRoutes
    pos: {
        home: NestedRoutes
        settings: FullRoute
    }
}

export const routes: Routes = {
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
    signUser:{
        path: '/sign-user',
        component: SignUserPage
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
        comboOffers: {
            path: '/admin/combo-offers',
            fullPath: '/app/admin/combo-offers',
            component: ComboOffersPage
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
        expensesDestination: {
            path: '/admin/expenses-destinations',
            fullPath: '/app/admin/expenses-destinations',
            component: ExpensesDestinationPage
        },
        expenses: {
            path: '/admin/expenses',
            fullPath: '/app/admin/expenses',
            component: ExpensesPage
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
        shiftReports: {
            path: '/admin/shift-reports',
            fullPath: '/app/admin/shift-reports',
            component: ShiftReportsPage
        },
        members: {
            path: '/admin/members',
            fullPath: '/app/admin/members',
            component: MembersPage
        },
        roles: {
            path: '/admin/roles',
            fullPath: '/app/admin/roles',
            component: RolesPage
        },
        branches: {
            path: '/admin/branches',
            fullPath: '/app/admin/branches',
            component: BranchesPage
        },
        discounts: {
            path: '/admin/discounts',
            fullPath: '/app/admin/discounts',
            component: DiscountsPage
        },
        taxes: {
            path: '/admin/taxes',
            fullPath: '/app/admin/taxes',
            component: TaxesPage
        },
        paymentsMethods: {
            path: '/admin/payments-methods',
            fullPath: '/app/admin/payments-methods',
            component: PaymentsMethodsPage
        },
        settings: {
            path: '/admin/settings',
            fullPath: '/app/admin/settings',
            component: SettingsPage
        }
    },
    pos: {
        home: {
            homeLayout: {
                path: '/pos/home/*',
                fullPath: '/app/pos/home/*',
                component: PosHomeLayoutContainer
            },
            products: {
                path: '/products',
                fullPath: '/app/pos/home/products',
                component: PosProductsPage
            },
            tables: {
                path: '/tables',
                fullPath: '/app/pos/home/tables',
                component: PosTablesPage
            },
            delivery: {
                path: '/delivery',
                fullPath: '/app/pos/home/delivery',
                component: PosDeliveryPage
            },
            invoice: {
                path: '/invoice',
                fullPath: '/app/pos/home/invoice',
                component: PosInvoicePage
            }
        },
        settings: {
            path: '/pos/settings',
            fullPath: '/app/pos/settings',
            component: PosSettingsPage
        }
    }
}


// clientStatementsReports: {
//     path: '/admin/clients-statements-reports',
//     fullPath: '/app/admin/clients-statements-reports',
//     component: ClientsStatementsReportsPage
// },

// suppliersStatementsReports: {
//     path: '/admin/suppliers-statements-reports',
//     fullPath: '/app/admin/suppliers-statements-reports',
//     component: SuppliersStatementsReportsPage
// },

// employeesReports: {
//     path: '/admin/employees-reports',
//     fullPath: '/app/admin/employees-reports',
//     component: EmployeesReportsPage
// },