import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DateType } from "react-tailwindcss-datepicker/dist/types";
import DropDownSearchComponent, {
    DropDownSearchComponentProps,
} from "src/common/components/DropDownSearchComponent";
import LoadingSpinComponent from "src/common/components/LoadingSpinComponent";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import { useTranslate } from "src/common/hooks/useTranslate";

function SearchButton({
    onClick,
    disabled = false,
    isLoading = false,
}: {
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
}) {
    return (
        <button
            className={
                "btn btn-square btn-ghost bg-base-100 border-gray-400 dark:border-gray-600 " +
                " disabled:border-gray-400 disabled:bg-gray-200 dark:disabled:bg-gray-600" +
                " text-gray-500 dark:text-gray-400 hover:bg-blue-600 hover:!text-white "
            }
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <LoadingSpinComponent className="w-5 h-10" />
            ) : (
                <MagnifyingGlassIcon className="w-8 h-10" />
            )}
        </button>
    );
}

export interface IReportSearchParams<T> {
    startDate: String;
    endDate: String;
    item: T | undefined;
}

export interface AdminReportsPickersComponentProps {
    onSearch?: (search: IReportSearchParams<any>) => void;
    enableSearchInput?: boolean;
    searchDropDown?: DropDownSearchComponentProps;
    isLoading?: boolean;
}

export const AdminReportsPickersComponent: FC<
    AdminReportsPickersComponentProps
> = ({
    onSearch,
    enableSearchInput = true,
    searchDropDown,
    isLoading = false,
}) => {
        const now = new Date();
        const currentDate = `${now.getFullYear()}/${now.getMonth() + 1
            }/${now.getDate()}`;

        const [result, setResult] = useState<IReportSearchParams<any>>({
            startDate: currentDate,
            endDate: currentDate,
            item: undefined,
        });

        const formattedResult: IReportSearchParams<any> = {
            ...result,
            startDate: result.startDate.replace(/-/g, "/"),
            endDate: result.endDate.replace(/-/g, "/"),
        };

    const { translate } = useTranslate();
        return (
            <div className="flex justify-between flex-col sm:flex-row gap-4 mb-4">
                <div className="flex flex-1 gap-4 justify-between">
                    <Datepicker
                        onChange={(newValue) => {
                            setResult({
                                ...result,
                                startDate: (newValue?.startDate as string).replace(/-/g, "/"),
                                endDate: (newValue?.endDate as string).replace(/-/g, "/"),
                            });
                        }}
                        containerClassName="flex-1 max-h-12"
                        value={{
                            startDate: result.startDate as DateType,
                            endDate: result.endDate as DateType,
                        }}
                        inputClassName="input input-bordered w-full sm:w-72 border-gray-400 dark:border-gray-600"
                        toggleClassName="invisible"
                        showShortcuts={true}
                        primaryColor={"white"}
                    />
                    {!enableSearchInput && (
                        <SearchButton
                            onClick={() => onSearch?.(formattedResult)}
                            disabled={!result.endDate || !result.startDate}
                            isLoading={isLoading}
                        />
                    )}
                </div>
                {enableSearchInput && (
                    <div className="flex gap-4">
                        <DropDownSearchComponent
                            input={{
                                className:
                                    "input input-bordered w-full md:w-64 border-gray-400 dark:border-gray-600",
                                placeholder: translate(TRANSLATE.SEARCH),
                            }}
                            containerClassName="w-full"
                            isLoading={
                                !searchDropDown?.data || searchDropDown?.data?.length < 1
                            }
                            onSelect={(_, itemData) => {
                                setResult({ ...formattedResult, item: itemData });
                            }}
                            {...searchDropDown}
                        />
                        <SearchButton
                            onClick={() => onSearch?.(result)}
                            disabled={!result.item || !result.endDate || !result.startDate}
                            isLoading={isLoading}
                        />
                    </div>
                )}
            </div>
        );
    };
