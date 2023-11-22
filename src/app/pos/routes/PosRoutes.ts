import { NestedRoutes, routes } from "src/common/routes/routes";

interface PosRoutes {
    withOrderSection: NestedRoutes
    withoutOrderSection: NestedRoutes
}

export const PosRoutes = {
    withOrderSection : {
        products: routes.pos.home.products,
        tables: routes.pos.home.tables,
        invoice: routes.pos.home.invoice,
        delivery: routes.pos.home.delivery,
    },
    withoutOrderSection : {
        home: routes.pos.home.homeLayout,
        settings: routes.pos.settings,
    }
}
