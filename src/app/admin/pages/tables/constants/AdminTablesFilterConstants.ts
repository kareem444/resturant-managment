import { FilterItem } from 'src/common/components/FilterComponent';
import { AdminTablesTableConstants } from './AdminTablesTableConstants';
import { AdminTablesInputsConstants } from './AdminTablesInputsConstants';

export const AdminTablesFilterConstants: [FilterItem, ...FilterItem[]] = [
  {
    name: AdminTablesTableConstants.number,
    value: AdminTablesInputsConstants.number,
  },
];
