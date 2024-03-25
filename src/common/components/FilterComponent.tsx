import { FC, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import useEchoState from "../DataHandler/hooks/client/useEchoState";
import { EchoStateConstants } from "../constants/EchoStateConstants";
import { AdminAsyncStateConstants } from "src/app/admin/constants/AdminAsyncStateConstants";
import useAsyncState from "../DataHandler/hooks/server/useAsyncState";
import { useTranslate } from "../hooks/useTranslate";

export type FilterItem = {
  name: string;
  value: string;
}

type originalItemsKeyType = keyof typeof AdminAsyncStateConstants;

export interface IFilterProps {
  items: [FilterItem, ...FilterItem[]];
  showFilterDropButton?: boolean;
  showSelectedFilter?: boolean;
  originalItemsKey: originalItemsKeyType;
  containerClassName?: string
}

const FilterComponent: FC<IFilterProps> = ({
  items,
  showFilterDropButton = true,
  showSelectedFilter = true,
  originalItemsKey,
  containerClassName = ''
}) => {
  const [filter, setFilter] = useState<FilterItem>();
  const { isXs } = useScreenSize();
  const { translate } = useTranslate();
  const { setState } = useEchoState(EchoStateConstants.searchedItems, []);
  const { state: originalItems } = useAsyncState<any[]>(originalItemsKey);

  const defaultFilterItem = items[0]?.value;

  let timer: ReturnType<typeof setTimeout> | undefined = undefined

  const handelOnSearch = (val: string) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      if (originalItems?.data) {
        setState(
          originalItems?.data?.filter((t: any) =>
            t[filter?.value || defaultFilterItem]
              .toString()
              .toLowerCase()
              .includes(val.toLowerCase())
          )
        );
      }
    }, 500)
  };

  const handelOnSelectFilter = (val: FilterItem | undefined) => {
    setFilter(val);

    if (!val) {
      handelOnSearch("");
    }
  };

  return (
    <div className={"flex items-center gap-2 w-2/3 md:w-1/2 lg:w-2/5" + " " + containerClassName}>
      {(showFilterDropButton && items && items.length > 0) && (
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="btn btn-sm btn-outline h-12 bg-white dark:bg-base-200 dark:hover:bg-blue-700 hover:bg-blue-700 normal-case flex gap-2"
          >
            <i className="fi fi-rr-settings-sliders text-lg h-6 dark:text-white"></i>
            {showSelectedFilter && !isXs && filter && (
              <span>{filter.name}</span>
            )}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52 mt-2"
          >
            {items.map((l, k) => {
              return (
                <li key={k}>
                  <a
                    onClick={() => handelOnSelectFilter(l)}
                    className={`${l.value === filter?.value && "text-success"}`}
                  >
                    {translate(l.name)}
                  </a>
                </li>
              );
            })}
            <div className="divider mt-0 mb-0"></div>
            <li>
              <a onClick={() => handelOnSelectFilter(undefined)}>Remove Filter</a>
            </li>
          </ul>
        </div>
      )}
      <div className="flex-1 w-full">
        <input
          type="search"
          placeholder={"search"}
          onChange={(e) => handelOnSearch(e.target.value)}
          className="input input-bordered border-gray-500 h-12 w-full"
        />
      </div>
    </div>
  );
};

export default FilterComponent;