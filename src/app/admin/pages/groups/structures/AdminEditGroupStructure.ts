import { IFormComponentProperties } from "src/common/components/FormComponent"
import { useTranslate } from "src/common/hooks/useTranslate"
import { AdminGroupInputsStructure } from "./AdminGroupInputsStructure"
import { TRANSLATE } from "src/common/constants/TranslateConstants"
import useEchoState from "src/common/DataHandler/hooks/client/useEchoState"
import { IAdminGroupModel } from "src/app/admin/models/AdminGroupModel"
import { AdminButtonContainerProps } from "src/app/admin/components/AdminButtonContainer"
import { IAdminGroupInputs } from "../interfaces/AdminGroupsInterface"
import useMutate from "src/common/DataHandler/hooks/server/useMutate"
import { AdminGroupsRepo } from "../repo/AdminGroupsRepo"
import { showNotification } from "src/common/components/ShowNotificationComponent"
import useModalReducer from "src/common/redux/modal/useModalReducer"
import { EchoStateConstants } from "src/common/constants/EchoStateConstants"
import useCrudHandler from "src/common/hooks/useCrudHandler"

export const AdminEditGroupStructure = (): IFormComponentProperties => {
    const { translate } = useTranslate()
    const { state: selectedGroup } = useEchoState<IAdminGroupModel>(EchoStateConstants.selectedItem)
    const { closeModal } = useModalReducer()
    const { updateOperation } = useCrudHandler<IAdminGroupModel>('groups')

    const { mutate, isLoading } = useMutate({
        queryFn: data => AdminGroupsRepo.updateGroup(selectedGroup?.id!, data),
        options: {
            onSuccess(_, param: IAdminGroupInputs) {
                updateOperation({ ...selectedGroup, ...param })
                showNotification('Group updated successfully')
                closeModal()
            },
            onError(e) {
                showNotification(e?.code, 'error')
            },
        }
    })

    const handelOnSubmit = (data: IAdminGroupInputs) => mutate(data)

    const button: AdminButtonContainerProps = {
        text: translate(TRANSLATE.EDIT),
        icon: 'fi-rr-pencil',
        isLoading
    }

    const defaultValues: IAdminGroupInputs = {
        name: selectedGroup?.name || '',
    }

    return {
        inputs: AdminGroupInputsStructure(),
        button,
        onSubmit: handelOnSubmit,
        defaultValues: defaultValues as any
    }
}