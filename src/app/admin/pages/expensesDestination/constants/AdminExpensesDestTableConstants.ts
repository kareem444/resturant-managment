export const AdminExpensesDestTableConstants = {
  name: 'name',
  date: 'date',
};

type ExpensesDestTableKeys = keyof typeof AdminExpensesDestTableConstants;
type ExpensesDestTableValues = (typeof AdminExpensesDestTableConstants)[ExpensesDestTableKeys];

export const AdminExpensesDestTableHeaderConstants: ExpensesDestTableValues[] = Object.values(
  AdminExpensesDestTableConstants
);
