export const AdminExpensesDestinationTableConstants = {
    name: "name",
    date: "date"
};

type ExpensesDestinationTableKeys = keyof typeof AdminExpensesDestinationTableConstants;
type ExpensesDestinationTableValues = (typeof AdminExpensesDestinationTableConstants)[ExpensesDestinationTableKeys];

export const AdminExpensesDestinationTableHeaderConstants: ExpensesDestinationTableValues[] =
    Object.values(AdminExpensesDestinationTableConstants);
