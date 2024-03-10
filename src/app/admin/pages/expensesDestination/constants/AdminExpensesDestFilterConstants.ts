import { FilterItem } from 'src/common/components/FilterComponent';
import { AdminExpensesDestTableConstants } from './AdminExpensesDestTableConstants';
import { AdminExpensesDestInputsConstants } from './AdminExpensesDestInputsConstants';

export const AdminExpensesDestFilterConstants: [FilterItem, ...FilterItem[]] = [
  {
    name: AdminExpensesDestTableConstants.name,
    value: AdminExpensesDestInputsConstants.name,
  },
];
