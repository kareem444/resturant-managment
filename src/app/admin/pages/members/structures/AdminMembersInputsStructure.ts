import useFetch from 'src/common/DataHandler/hooks/server/useFetch'
import { InputComponentProps } from 'src/common/components/InputComponent'
import { AsyncStateConstants } from 'src/common/constants/AsyncStateConstants'
import { TRANSLATE } from 'src/common/constants/TranslateConstants'
import { useTranslate } from 'src/common/hooks/useTranslate'
import { AdminBranchesRepo } from '../../branches/repo/AdminBranchesRepo'
import { IAdminBranchModel } from 'src/app/admin/models/AdminBranchModel'
import { IAdminRoleModel } from 'src/app/admin/models/AdminRoleModel'
import { AdminRolesRepo } from '../../roles/repo/AdminRolesRepo'
import useEchoState from 'src/common/DataHandler/hooks/client/useEchoState'
import { EchoStateConstants } from 'src/common/constants/EchoStateConstants'
import { AdminMemberInputsConstants } from '../constants/AdminMemberInputsConstants'

export const AdminMembersInputsStructure = (
    isEditModal = false
): InputComponentProps[] => {
    const { translate } = useTranslate()

    const { data: branches, isLoading: isBranchLoading } = useFetch<
        IAdminBranchModel[]
    >({
        key: AsyncStateConstants.branches,
        queryFn: () => AdminBranchesRepo.getBranches(),
        options: {
            isExecuteOnInitIfNoData: true
        }
    })

    const { data: roles, isLoading: isRolesLoading } = useFetch<
        IAdminRoleModel[]
    >({
        key: AsyncStateConstants.roles,
        queryFn: () => AdminRolesRepo.getRoles(),
        options: {
            isExecuteOnInitIfNoData: true
        }
    })

    const { state: pickedBranch, setState: setPickedBranch } = useEchoState(EchoStateConstants.pickedBranch)
    const { state: pickedRole, setState: setPickedRole } = useEchoState(EchoStateConstants.pickedRole)

    return [
        {
            labelTitle: translate(`${TRANSLATE.NAME}`),
            validatedInput: {
                name: AdminMemberInputsConstants.name,
                rules: {
                    isRequired: true
                }
            }
        },
        {
            labelTitle: translate(`Email`),
            type: 'email',
            validatedInput: {
                name: AdminMemberInputsConstants.email!,
                rules: {
                    isEmail: true
                }
            }
        },
        {
            labelTitle: translate(`Mobile`),
            type: 'number',
            validatedInput: {
                name: AdminMemberInputsConstants.mobile!,
                rules: {
                    isNumber: true
                }
            }
        },
        {
            type: 'number',
            labelTitle: translate(`Password`),
            validatedInput: {
                name: AdminMemberInputsConstants.password!,
                rules: {
                    isRequired: true,
                    isNumber: true
                }
            }
        },
        {
            labelTitle: 'Branch',
            labelStyle: '',
            disabled: (isBranchLoading || !branches?.length),
            type: 'dropdownSearch',
            validatedInput: {
                name: AdminMemberInputsConstants.branch!,
                rules: {
                    isRequired: true,
                },
            },
            dropDownSearchInput: {
                data: branches,
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                onSelect: (_, item) => setPickedBranch(item),
                isLoading: isBranchLoading,
                defaultSelectedValue: isEditModal ? (pickedBranch || undefined) : undefined
            }
        },
        {
            labelTitle: 'Role',
            labelStyle: '',
            type: 'dropdownSearch',
            disabled: (isRolesLoading || !roles?.length),
            validatedInput: {
                name: AdminMemberInputsConstants.role!,
                rules: {
                    isRequired: true,
                }
            },
            dropDownSearchInput: {
                data: roles,
                selectors: {
                    value: 'id',
                    text: 'name'
                },
                onSelect: (_, item) => setPickedRole(item),
                isLoading: isRolesLoading,
                defaultSelectedValue: isEditModal ? (pickedRole || undefined) : undefined
            }
        },
        {
            labelTitle: translate(`Residential Number`),
            validatedInput: {
                name: AdminMemberInputsConstants.residentialNumber!,
            }
        },
        {
            labelTitle: translate(`Health Certificate`),
            validatedInput: {
                name: AdminMemberInputsConstants.healthCertificate!,
            }
        }
    ]
}
