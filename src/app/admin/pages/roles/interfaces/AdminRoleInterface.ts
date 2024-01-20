export type iRoleTypes = 'dashboard' | 'pos' | 'dashboardAndPos';

export interface IRolesOptions {
    access: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
}

export interface IPosRoles {
    pos?: {
        accessPos: boolean;
        addCustomer: boolean;
        applyDiscount: boolean;
        salesReturn: boolean;
        viewInvoices: boolean;
    }
}

export interface IDashboardRoles extends IPosRoles {
    units?: IRolesOptions;
    groups?: IRolesOptions;
    products?: IRolesOptions;
    additions?: IRolesOptions;
    comboOffers?: IRolesOptions;
    tables?: IRolesOptions;
    delivery?: IRolesOptions;
    customers?: IRolesOptions;
    salesBills?: IRolesOptions;
    bouncedSales?: IRolesOptions;
    suppliers?: IRolesOptions;
    purchasesBill?: IRolesOptions;
    expensesDestinations?: IRolesOptions;
    expenses?: IRolesOptions;
    members?: IRolesOptions;
    roles?: IRolesOptions;
    branches?: IRolesOptions;
    discounts?: IRolesOptions;
    taxes?: IRolesOptions;
    paymentsMethods?: IRolesOptions;
    reports?: {
        deliveryReports?: boolean;
        expensesReports?: boolean;
        paymentsReports?: boolean;
        productsReports?: boolean;
        purchasesReports?: boolean;
        salesReports?: boolean;
        shiftReports?: boolean;
        tobaccoDutyReports?: boolean;
        valueAddedReports?: boolean;
    }
}

export interface IAdminRolesInputs {
    name: string
    role: iRoleTypes
}

export type IAdminRolesInputsEnum = {
    [K in keyof IAdminRolesInputs]: K;
};