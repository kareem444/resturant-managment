import { RootState } from "src/common/redux/store";

/* #region main selectors */
export const posAppState = (state: RootState) => state.pos.app;
export const posDataState = (state: RootState) => state.pos.data;
/* #endregion */

/* #region pages selectors */
export const productsPageState = (state: RootState) => {
    return {
        showProductOrCombo: state.pos.app.showProductOrCombo,
        products: state.pos.data.products,
        groups: state.pos.data.groups,
    };
};

export const tablesPageState = (state: RootState) => {
    return {
        tables: state.pos.data.tables,
    };
}
/* #endregion */
