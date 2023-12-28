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
    const titleWithoutLetterES: string | null = path
        ? translate(path.slice(0, -2))
        : null;

    return { title, titleWithoutLetterS, titleWithoutLetterES };
}
