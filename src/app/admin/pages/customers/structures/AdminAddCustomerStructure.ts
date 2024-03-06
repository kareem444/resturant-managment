import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminCustomerInputsStructure } from './AdminCustomerInputsStructure'
import { IAdminCustomerInputs } from '../interfaces/AdminCustomersInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminCustomersRepo } from '../repo/AdminCustomersRepo'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import { IAdminCustomerModel } from 'src/app/admin/models/AdminCustomerModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const AdminAddCustomerStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminCustomerModel>('customers')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminCustomersRepo.createCustomer(data),
            options: {
                onSuccess(id, param: IAdminCustomerInputs) {
                    createOperation({ ...param, id })
                    showNotification('Customer added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminCustomerInputs) => mutate(data)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminCustomerInputs = {
            name: '',
            taxNumber: '',
            mobile: '',
            address: '',
        }

        return {
            inputs: AdminCustomerInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
