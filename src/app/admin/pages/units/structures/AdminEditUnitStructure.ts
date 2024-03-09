import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminUnitInputsStructure } from "./AdminUnitInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminUnitModel } from "src/app/admin/models/AdminUnitModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminUnitInputs } from "../interfaces/AdminUnitsInterface"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminUnitsRepo } from "../repo/AdminUnitsRepo"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const AdminEditUnitStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedUnit } = useEchoState<IAdminUnitModel>(EchoStateConstants.selectedItem)
    const { closeModal } = useModalReducer()
    const { updateOperation } = useCrudHandler<IAdminUnitModel>('units')

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminUnitsRepo.updateUnit(selectedUnit?.id!, data),
        options: {
            onSuccess(_, param: IAdminUnitInputs) {
                updateOperation({ ...selectedUnit, ...param })
                showNotification('Unit updated successfully')
                closeModal()
            },
            onError(e) {
                showNotification(e?.code, 'error')
            },
        }
    })

    const handelOnSubmit = (data: IAdminUnitInputs) => mutate(data)

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: 'fi-rr-pencil',
        isLoading
    }

    const defaultValues: IAdminUnitInputs = {
        name: selectedUnit?.name || '',
    }

    return {
        inputs: AdminUnitInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any
    }
}