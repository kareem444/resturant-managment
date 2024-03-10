export const AdminTablesTableConstants = {
  number: 'number',
  date: 'date',
};

type TablesTableKeys = keyof typeof AdminTablesTableConstants;
type TablesTableValues = (typeof AdminTablesTableConstants)[TablesTableKeys];

export const AdminTablesTableHeaderConstants: TablesTableValues[] =
  Object.values(AdminTablesTableConstants);
