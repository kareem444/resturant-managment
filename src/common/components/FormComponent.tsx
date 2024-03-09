import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent, { InputComponentProps } from "./InputComponent";
import AdminButtonComponent, {
    AdminButtonContainerProps,
} from "src/app/admin/components/AdminButtonContainer";
import useModalReducer from "../redux/modal/useModalReducer";
import useScreenSize from "../hooks/useScreenSize";

export interface IDefaultValuesProperties {
    [key: string]: string | number | boolean | undefined | File | Date;
}

export interface IFormComponentProperties {
    defaultValues?: IDefaultValuesProperties;
    containerClassName?: string;
    formClassName?: string;
    childClassnames?: string;
    inputs: InputComponentProps[];
    onSubmit?: SubmitHandler<any>;
    button?: AdminButtonContainerProps;
    child?: JSX.Element;
    showCloseModalButton?: boolean;
}

const FormComponent: FC<IFormComponentProperties> = ({
    defaultValues,
    inputs,
    onSubmit,
    button,
    containerClassName = "",
    childClassnames,
    formClassName = "",
    child,
    showCloseModalButton = true,
}) => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<IDefaultValuesProperties>({
        defaultValues,
    });

    const { isXs } = useScreenSize();

    const { closeModal } = useModalReducer();
    const onFormSubmit: SubmitHandler<any> = (data) => onSubmit && onSubmit(data);

    return (
        <form
            onSubmit={handleSubmit(onFormSubmit)}
            className={"flex-1" + " " + formClassName}
        >
            <div
                className={
                    "grid grid-cols-1 grid-rows-1 sm:grid-cols-12 gap-5 grid-flow-row" +
                    " " +
                    containerClassName
                }
            >
                {inputs.map((input, index) => {
                    if (input.validatedInput) {
                        input.validatedInput.control = control;
                        input.validatedInput.error = errors;
                    }
                    return (
                        <InputComponent
                            {...input}
                            key={index}
                            containerStyle={`col-span-6 ${childClassnames} ${input.containerStyle}`}
                        />
                    );
                })}
            </div>
            {child}
            {(!!button || showCloseModalButton) && (
                <div className={"flex mt-5 gap-5 " + (isXs ? "flex-col-reverse" : "")}>
                    {showCloseModalButton && (
                        <button className="btn btn-outline flex-1" onClick={closeModal}>
                            Close
                        </button>
                    )}
                    {button && (
                        <AdminButtonComponent
                            buttonClassName={
                                showCloseModalButton ? "flex-1" : "sm:!w-1/2 lg:!w-1/3 mx-auto"
                            }
                            {...button}
                            type="submit"
                        />
                    )}
                </div>
            )}
        </form>
    );
};

export default FormComponent;
