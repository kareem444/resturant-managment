import { FC } from "react";
import SubtitleComponent from "./SubtitleComponent";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import { useTranslate } from "../hooks/useTranslate";
import { TRANSLATE } from "../constants/TranslateConstants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrinterIcon } from "@heroicons/react/24/outline";

interface TitleCardProps {
  title: string;
  children: React.ReactNode;
  topMargin?: string;
  onRefreshDataButtonClick?: () => void;
  onPrintButtonClick?: () => void;
  onPdfButtonClick?: () => void;
  onWhatsappButtonClick?: () => void;
}

const TitleCardComponent: FC<TitleCardProps> = ({
  title,
  children,
  topMargin,
  onRefreshDataButtonClick,
  onPrintButtonClick,
  onPdfButtonClick,
  onWhatsappButtonClick,
}) => {
  const { translate } = useTranslate();
  return (
    <div
      className={
        "card w-full p-4 sm:p-6 bg-base-100 shadow-sm border border-gray-300 dark:border-none" +
        " " +
        (topMargin || "mt-6")
      }
    >
      <SubtitleComponent
        styleClass="inline-block flex items-center justify-between"
      >
        <h3 className="text-lg">{title}</h3>

        <div className="flex items-center gap-2">
          <>
            {
              !!onWhatsappButtonClick && (
                <button
                  className="btn btn-square btn-ghost"
                  onClick={onWhatsappButtonClick}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                </button>
              )
            }

            {
              !!onPdfButtonClick && (
                <button
                  className="btn btn-square btn-ghost"
                  onClick={onPdfButtonClick}
                >
                  <FontAwesomeIcon icon={faFilePdf} className="text-2xl" />
                </button>
              )
            }

            {
              !!onPrintButtonClick && (
                <button
                  className="btn btn-square btn-ghost"
                  onClick={onPrintButtonClick}
                >
                  <PrinterIcon className="w-8 h-10" />
                </button>
              )
            }

            {!!onRefreshDataButtonClick && (
              <button
                className="btn btn-ghost border border-gray-400 btn-sm normal-case flex justify-between gap-2 hover:bg-blue-700 hover:text-white"
                onClick={onRefreshDataButtonClick}
              >
                <ArrowPathIcon className="w-4" />
                <span className="hidden sm:block">{`${translate(
                  TRANSLATE.REFRESH
                )} ${translate(TRANSLATE.THE_DATA)}`}</span>
              </button>
            )}
          </>
        </div>
      </SubtitleComponent>

      <div className="divider my-1 sm:my-2"></div>
      <div className="h-full w-full pb-6 bg-base-100">{children}</div>
    </div>
  );
};

export default TitleCardComponent;
