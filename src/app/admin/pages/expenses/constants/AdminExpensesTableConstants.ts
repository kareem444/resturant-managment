export const AdminExpensesTableConstants = {
    name: "name",
    branch: "branch",
    expensesDestination: "expenses destination",
    paymentMethod: "payment method",
    description: "description",
};

type ExpensesTableKeys = keyof typeof AdminExpensesTableConstants;
type ExpensesTableValues = (typeof AdminExpensesTableConstants)[ExpensesTableKeys];

export const AdminExpensesTableHeaderConstants: ExpensesTableValues[] =
    Object.values(AdminExpensesTableConstants);
