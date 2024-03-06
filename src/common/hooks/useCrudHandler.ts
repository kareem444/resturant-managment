import { AdminAsyncStateConstants } from "src/app/admin/constants/AdminAsyncStateConstants";
import useAsyncState from "../DataHandler/hooks/server/useAsyncState";
import useEchoState from "../DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "../constants/EchoStateConstants";

type OriginalItemsKeyType = keyof typeof AdminAsyncStateConstants;

const useCrudHandler = <T extends { id?: string }>(
    asyncDataKey: OriginalItemsKeyType
) => {
    const { setState } = useAsyncState<T[]>(asyncDataKey);
    const { state: searchedCustomer, setState: setSearchedCustomers } =
        useEchoState<T[]>(EchoStateConstants.searchedItems);

    const createOperation = (newItem: T, order: "desc" | "asc" = "desc") => {
        setState((prevState) => {
            return {
                data: [...(prevState?.data || []), newItem],
            };
        });

        if (searchedCustomer && searchedCustomer.length > 0) {
            setSearchedCustomers(
                order === "desc"
                    ? [newItem, ...searchedCustomer]
                    : [...searchedCustomer, newItem]
            );
        }
    };

    const updateOperation = (updatedItem: T) => {
        setState((prevState) => {
            return {
                data: prevState?.data?.map((item) => {
                    if (item.id === updatedItem.id) {
                        return { ...item, ...updatedItem };
                    }
                    return item;
                }),
            };
        });

        if (searchedCustomer && searchedCustomer.length > 0) {
            setSearchedCustomers(
                searchedCustomer.map((item) => {
                    if (item.id === updatedItem.id) {
                        return { ...item, ...updatedItem };
                    }
                    return item;
                })
            );
        }
    };

    const deleteOperation = (deletedItem: T) => {
        setState((prevState) => {
            return {
                data: prevState?.data?.filter((item) => item.id !== deletedItem.id),
            };
        });

        if (searchedCustomer && searchedCustomer.length > 0) {
            setSearchedCustomers(
                searchedCustomer.filter((item) => item.id !== deletedItem.id)
            );
        }
    };

    return {
        createOperation,
        updateOperation,
        deleteOperation,
    };
};

export default useCrudHandler;
