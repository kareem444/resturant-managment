import { IFormComponentProperties } from 'src/common/components/FormComponent'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminUnitInputsStructure } from './AdminUnitInputsStructure'
import { IAdminUnitInputs } from '../interfaces/AdminUnitsInterface'
import { AdminButtonContainerProps } from 'src/app/admin/components/AdminButtonContainer'
import useMutate from 'src/common/DataHandler/hooks/server/useMutate'
import { AdminUnitsRepo } from '../repo/AdminUnitsRepo'
import {
    showNotification
} from 'src/common/components/ShowNotificationComponent'
import { IAdminUnitModel } from 'src/app/admin/models/AdminUnitModel'
import useCrudHandler from 'src/common/hooks/useCrudHandler'

export const AdminAddUnitStructure =
    (): IFormComponentProperties => {
        const { translate } = useTranslate()
        const { createOperation } = useCrudHandler<IAdminUnitModel>('units')

        const { mutate, isLoading } = useMutate({
            queryFn: data => AdminUnitsRepo.createUnit(data),
            options: {
                onSuccess(id, param: IAdminUnitInputs) {
                    createOperation({ ...param, id })
                    showNotification('Unit added successfully')
                },
                onError(e) {
                    showNotification(e?.code, 'error')
                }
            }
        })

        const handelOnSubmit = (data: IAdminUnitInputs) => mutate(data)

        const button: AdminButtonContainerProps = {
            text: translate(TRANSLATE.ADD),
            icon: 'fi-rr-plus',
            isLoading
        }

        const defaultValues: IAdminUnitInputs = {
            name: ''
        }

        return {
            inputs: AdminUnitInputsStructure(),
            button,
            onSubmit: handelOnSubmit,
            defaultValues: defaultValues as any
        }
    }
