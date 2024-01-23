import { lazy } from 'react'

const PosPageContainer = lazy(() => import('../../app/pos/containers/PosPageContainer'))
const AdminPageContainer = lazy(() => import('../../app/admin/containers/AdminPageContainer'))

const LoginPage = lazy(() => import('../../app/auth/pages/login'))
const RegisterPage = lazy(() => import('../../app/auth/pages/register'))
const SignUserPage = lazy(() => import('../../app/auth/pages/signUser'))
const ForgotPasswordPage = lazy(
    () => import('../../app/auth/pages/forgotPassword')
)
const OtpPage = lazy(() => import('../../app/auth/pages/otp'))
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
    admin: NestedRoutes
    adminLayout: Route
    posLayout: Route
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
    signUser: {
        path: '/sign-user',
        component: SignUserPage
    },
    otp: {
        path: '/otp',
        component: OtpPage
    },
    adminLayout: {
        path: '/admin/*',
        component: AdminPageContainer
    },
    posLayout: {
        path: '/pos/*',
        component: PosPageContainer
    },
    admin: {
        dashboard: {
            path: '/dashboard',
            fullPath: '/admin/dashboard',
            component: DashBoardPage
        },
        groups: {
            path: '/groups',
            fullPath: '/admin/groups',
            component: GroupsPage
        },
        units: {
            path: '/units',
            fullPath: '/admin/units',
            component: UnitsPage
        },
        products: {
            path: '/products',
            fullPath: '/admin/products',
            component: ProductsPage
        },
        additions: {
            path: '/additions',
            fullPath: '/admin/additions',
            component: AdditionsPage
        },
        comboOffers: {
            path: '/combo-offers',
            fullPath: '/admin/combo-offers',
            component: ComboOffersPage
        },
        tables: {
            path: '/tables',
            fullPath: '/admin/tables',
            component: TablesPage
        },
        delivery: {
            path: '/delivery',
            fullPath: '/admin/delivery',
            component: DeliveryPage
        },
        customers: {
            path: '/customers',
            fullPath: '/admin/customers',
            component: CustomersPage
        },
        salesBills: {
            path: '/sales-bills',
            fullPath: '/admin/sales-bills',
            component: SalesBillsPage
        },
        bouncedSales: {
            path: '/bounced-sales',
            fullPath: '/admin/bounced-sales',
            component: BouncedSalesPage
        },
        suppliers: {
            path: '/suppliers',
            fullPath: '/admin/suppliers',
            component: SuppliersPage
        },
        purchasesBills: {
            path: '/purchases-bills',
            fullPath: '/admin/purchases-bills',
            component: PurchasesBillsPage
        },
        bouncedPurchases: {
            path: '/bounced-purchases',
            fullPath: '/admin/bounced-purchases',
            component: BouncedPurchasesPage
        },
        expensesDestination: {
            path: '/expenses-destinations',
            fullPath: '/admin/expenses-destinations',
            component: ExpensesDestinationPage
        },
        expenses: {
            path: '/expenses',
            fullPath: '/admin/expenses',
            component: ExpensesPage
        },
        productsReports: {
            path: '/products-reports',
            fullPath: '/admin/products-reports',
            component: ProductsReportsPage
        },
        salesReports: {
            path: '/sales-reports',
            fullPath: '/admin/sales-reports',
            component: SalesReportsPage
        },
        valueAddedReports: {
            path: '/value-added-reports',
            fullPath: '/admin/value-added-reports',
            component: ValueAddedReportsPage
        },
        tobaccoDutyReports: {
            path: '/tobacco-duty-reports',
            fullPath: '/admin/tobacco-duty-reports',
            component: TobaccoDutyReportsPage
        },
        purchasesReports: {
            path: '/purchases-reports',
            fullPath: '/admin/purchases-reports',
            component: PurchasesReportsPage
        },
        expensesReports: {
            path: '/expenses-reports',
            fullPath: '/admin/expenses-reports',
            component: ExpensesReportsPage
        },
        paymentsReports: {
            path: '/payments-reports',
            fullPath: '/admin/payments-reports',
            component: PaymentsReportsPage
        },
        deliveryReports: {
            path: '/delivery-reports',
            fullPath: '/admin/delivery-reports',
            component: DeliveryReportsPage
        },
        shiftReports: {
            path: '/shift-reports',
            fullPath: '/admin/shift-reports',
            component: ShiftReportsPage
        },
        members: {
            path: '/members',
            fullPath: '/admin/members',
            component: MembersPage
        },
        roles: {
            path: '/roles',
            fullPath: '/admin/roles',
            component: RolesPage
        },
        branches: {
            path: '/branches',
            fullPath: '/admin/branches',
            component: BranchesPage
        },
        discounts: {
            path: '/discounts',
            fullPath: '/admin/discounts',
            component: DiscountsPage
        },
        taxes: {
            path: '/taxes',
            fullPath: '/admin/taxes',
            component: TaxesPage
        },
        paymentsMethods: {
            path: '/payments-methods',
            fullPath: '/admin/payments-methods',
            component: PaymentsMethodsPage
        },
        settings: {
            path: '/settings',
            fullPath: '/admin/settings',
            component: SettingsPage
        }
    },
    pos: {
        home: {
            homeLayout: {
                path: '/home/*',
                fullPath: '/pos/home/*',
                component: PosHomeLayoutContainer
            },
            products: {
                path: '/products',
                fullPath: '/pos/home/products',
                component: PosProductsPage
            },
            tables: {
                path: '/tables',
                fullPath: '/pos/home/tables',
                component: PosTablesPage
            },
            delivery: {
                path: '/delivery',
                fullPath: '/pos/home/delivery',
                component: PosDeliveryPage
            },
            invoice: {
                path: '/invoice',
                fullPath: '/pos/home/invoice',
                component: PosInvoicePage
            }
        },
        settings: {
            path: '/settings',
            fullPath: '/pos/settings',
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