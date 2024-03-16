import { FC } from "react";
import AdminButtonComponent from "../components/AdminButtonContainer";
import useScreenSize from "src/common/hooks/useScreenSize";
import { useTranslate } from "src/common/hooks/useTranslate";
import { TRANSLATE } from "src/common/constants/TranslateConstants";
import usePageTitle from "src/common/hooks/usePageTitle";
import FilterComponent, {
  IFilterProps,
} from "src/common/components/FilterComponent";
import { ModalComponentsKeys } from "src/common/containers/ModalContainer";
import AdminModalActionsStructure from "../structure/modal/AdminModalActionsStructure";
import { IModalSizes } from "src/common/redux/modal/ModalInterface";

interface AdminAddAndSearchContainerProps {
  isEnableAdd?: boolean;
  isEnableSearch?: boolean;
  addModalComponent?: ModalComponentsKeys;
  addModalSize?: IModalSizes;
  filter?: IFilterProps;
  formatTitle?: "none" | "s" | "es";
  buttonClassName?: string;
}

const AdminAddAndSearchContainer: FC<AdminAddAndSearchContainerProps> = ({
  isEnableAdd = true,
  isEnableSearch = true,
  addModalComponent,
  addModalSize = "3xl",
  filter,
  formatTitle = "s",
  buttonClassName,
}) => {
  const { titleWithoutLetterS, title, titleWithoutLetterES } = usePageTitle();
  const { translate, isArabic } = useTranslate();
  const { isSm } = useScreenSize();
  const { openAddModal } = AdminModalActionsStructure();

  const handelTitle = () => {
    if (formatTitle === "none") {
      return title;
    } else if (formatTitle === "s") {
      return titleWithoutLetterS;
    } else {
      return titleWithoutLetterES;
    }
  };

  return (
    <>
      <div className="flex justify-between gap-2">
        {isEnableSearch && !!filter && <FilterComponent {...filter} />}
        {isEnableAdd && (
          <AdminButtonComponent
            text={
              `${translate(TRANSLATE.ADD)}` +
              " " +
              `${!isSm ? translate(handelTitle() ?? "") : ""}`
            }
            buttonClassName={
              "!w-1/3 md:!w-1/4" +
              " " +
              buttonClassName +
              " " +
              (!(isEnableSearch && !!filter) && !isArabic ? "ml-auto" : "") +
              " " +
              (!(isEnableSearch && !!filter) && isArabic ? "mr-auto" : "")
            }
            icon="fi-rr-plus"
            onClick={
              !!addModalComponent
                ? () =>
                  openAddModal(addModalComponent, {
                    size: addModalSize,
                    formatTitle,
                  })
                : undefined
            }
          />
        )}
      </div>
      <div className="my-1 sm:my-2"></div>
    </>
  );
};

export default AdminAddAndSearchContainer;
