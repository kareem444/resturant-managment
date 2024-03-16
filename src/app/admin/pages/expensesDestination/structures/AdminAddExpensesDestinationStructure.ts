import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminExpensesDestinationInputsStructure } from './AdminExpensesDestinationInputsStructure'
import { IAdminExpensesDestinationInputs } from '../interfaces/AdminExpensesDestinationsInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminExpensesDestinationsRepo } from '../repo/AdminExpensesDestinationsRepo'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import { IAdminExpensesDestinationModel } from 'src/app/admin/models/AdminExpensesDestinationModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'
//
export const AdminAddExpensesDestinationStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminExpensesDestinationModel>('expensesDestinations')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminExpensesDestinationsRepo.createExpensesDestination(data),
            options: {
                onSuccess(id, param: IAdminExpensesDestinationInputs) {
                    createOperation({ ...param, id })
                    showNotification('ExpensesDestination added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminExpensesDestinationInputs) => mutate(data)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminExpensesDestinationInputs = {
            name: ''
        }

        return {
            inputs: AdminExpensesDestinationInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
