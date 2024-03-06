import { Ref, forwardRef } from "react";
import logo from "../../common/assets/images/logo.png";
import moment from "moment";

interface AdminReportContainerProps {
    children: React.ReactNode;
}

const A4ReportContainer = forwardRef(
    (props: AdminReportContainerProps, ref: Ref<HTMLDivElement>) => {
        return (
            <div ref={ref} className="p-5 pt-0 text-black h-screen bg-white">
                <table className="w-full h-full">
                    <thead>
                        <tr className="flex justify-between w-full py-5">
                            <td className="text-left flex flex-col justify-center">
                                <p>Al Royaa Al Rakamya</p>
                                <p>For Information Technology</p>
                                <p>VAT :302252074700003</p>
                                <p>C.T :4030493912</p>
                            </td>
                            <td className="w-32">
                                <img src={logo} alt="logo" />
                            </td>
                            <td className="text-right flex flex-col justify-center">
                                <p>مؤسسة الرؤيا الرقمية</p>
                                <p>لتقنية المعلومات</p>
                                <p>الرقم الضريبى : 3022520747000</p>
                                <p>السجل التجارى: 4030493912 </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr className="mb-5 border-black" />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="flex flex-col">{props.children}</td>
                        </tr>
                    </tbody>
                    <tfoot className="h-20 w-full">
                        <tr>
                            <td>
                                <div className="fixed bottom-0 right-0 w-full px-5">
                                    <div className="flex justify-between text-gray-600 text-sm">
                                        <span>{moment().format("YYYY/MM/DD")}</span>
                                        <span>{moment().format("hh:mm:ss A")}</span>
                                    </div>
                                    <hr className="border-black my-2" />
                                    <div className="mb-5 mt-auto">
                                        <p className="text-right mt-1">
                                            جدة ش خالد بن الواليد مركز التقنية مكتب رقم 4
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
);

export default A4ReportContainer;
