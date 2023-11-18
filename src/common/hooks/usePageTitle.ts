import { useLocation } from "react-router-dom";
import { routes } from "../routes/routes";
import { useTranslate } from "./useTranslate";

export default function usePageTitle() {
    const { pathname } = useLocation();
    const { translate } = useTranslate();
    const path: string | undefined = pathname.split("/").pop();
    const title: string | null = path ? translate(path) : null;
    const titleWithoutLetterS: string | null = path
        ? translate(path.slice(0, -1))
        : null;
    // let title: string | null = null
    // for (const key in routes.admin) {
    //     // @ts-ignore
    //     const pathInRoutes = routes.admin[key].path?.split('/').pop()
    //     if (path === pathInRoutes) {
    //         const pureTitle = path?.split('-').join(' ')
    //         title = `${pureTitle?.charAt(0).toUpperCase()}${pureTitle?.slice(1)}`
    //     }
    // }
    return { title, titleWithoutLetterS };
}
