import { IAdminRoles, IRolesOptions } from "../interfaces/AdminRoleInterface"

const defaultRoles: IRolesOptions = {
    access: true, add: false, edit: false, delete: false
}

export const adminRoleDefaultVal: IAdminRoles = {
    units: defaultRoles,
    groups: defaultRoles,
    products: defaultRoles,
    additions: defaultRoles,
    comboOffers: defaultRoles,
    tables: defaultRoles,
    delivery: defaultRoles,
    customers: defaultRoles,
    salesBills: defaultRoles,
    bouncedSales: defaultRoles,
    suppliers: defaultRoles,
    purchasesBill: defaultRoles,
    expensesDestinations: defaultRoles,
    expenses: defaultRoles,
    members: defaultRoles,
    roles: defaultRoles,
    branches: defaultRoles,
    discounts: defaultRoles,
    taxes: defaultRoles,
    paymentsMethods: defaultRoles,
    reports: {
        deliveryReports: false,
        expensesReports: false,
        paymentsReports: false,
        productsReports: false,
        purchasesReports: false,
        salesReports: false,
        shiftReports: false,
        tobaccoDutyReports: false,
        valueAddedReports: false
    }
}