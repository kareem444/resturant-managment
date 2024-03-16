import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminSupplierInputsStructure } from './AdminSupplierInputsStructure'
import { IAdminSupplierInputs } from '../interfaces/AdminSupplierInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminSuppliersRepo } from '../repo/AdminSupplierRepo'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import useCrudHandler from 'src/common/hooks/useCrudHandler'
import { IAdminSupplierModel } from 'src/app/admin/models/AdminSupplierModel'

export const AdminAddSupplierStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminSupplierModel>('suppliers')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminSuppliersRepo.createSupplier(data),
            options: {
                onSuccess(id, param: IAdminSupplierInputs) {
                    createOperation({ ...param, id })
                    showNotification('Supplier added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminSupplierInputs) => mutate(data)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminSupplierInputs = {
            name: '',
            address: '',
            phone: '',
            taxNumber: ''
        }

        return {
            inputs: AdminSupplierInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
