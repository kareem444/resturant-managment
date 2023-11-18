import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { Dispatch, FC, SetStateAction, useState } from 'react'

interface SearchBarProps {
  input?: {
    styleClass?: string
    placeholderText?: string
    onChange?: (value: string) => void
  }
  filter?: {
    items: string[]
    showFilterBadge?: boolean
    onChange?: (value: string) => void
  }
  onSearch?: (search: string, filter: string) => void
  update?: {
    items: any[]
    onUpdateState: Dispatch<SetStateAction<any[]>>
  }
}

const SearchComponent: FC<SearchBarProps> = ({
  input,
  filter,
  onSearch,
  update
}) => {
  const [searchTextValue, setSearchTextValue] = useState('')
  const [filterParam, setFilterParam] = useState('')

  const updateSearchInput = (val: string) => {
    setSearchTextValue(val)
    if (input?.onChange) {
      input.onChange(val)
    }
    if (onSearch) {
      onSearch(
        val,
        filterParam?.toLowerCase() || filter!.items[0]?.toLowerCase()
      )
    }
    if (update) {
      update.onUpdateState(
        update.items.filter((t: any) =>
          t[filterParam?.toLowerCase() || filter!.items[0]?.toLowerCase()]
            .toString()
            .toLowerCase()
            .includes(val.toLowerCase())
        )
      )
    }
  }

  const updateFilterParam = (val: string) => {
    setFilterParam(val)
    if (val === '') {
      setSearchTextValue('')
    }
    if (filter?.onChange) {
      filter.onChange(val)
    }
    if (onSearch) {
      onSearch(
        val !== '' ? searchTextValue : '',
        val !== '' ? val.toLowerCase() : filter!.items[0]?.toLowerCase()
      )
    }

    if (update) {
      update.onUpdateState(
        update.items.filter((t: any) =>
          t[val !== '' ? val.toLowerCase() : filter!.items[0]?.toLowerCase()]
            .toString()
            .toLowerCase()
            .includes(val !== '' ? searchTextValue.toLowerCase() : '')
        )
      )
    }
  }

  return (
    <div className={'flex items-center ' + input?.styleClass}>
      <div
        className={`relative flex flex-wrap items-stretch w-full ${!(filter?.showFilterBadge && filterParam) && 'mx-3'
          }`}
      >
        <input
          type='search'
          value={searchTextValue}
          placeholder={input?.placeholderText || 'search'}
          onChange={e => updateSearchInput(e.target.value)}
          className='input input-bordered w-full max-w-xs h-10'
        />
      </div>
      {filter?.showFilterBadge && filterParam && (
        <button
          onClick={() => updateFilterParam('')}
          className='btn btn-xs btn-active normal-case mx-2'
        >
          {filterParam}
          <XMarkIcon className='w-4 ml-2 ' />
        </button>
      )}
      {filter?.items && filter?.items.length > 0 && (
        <div className='dropdown dropdown-bottom dropdown-end'>
          <label tabIndex={0} className='btn btn-sm btn-outline h-10'>
            <FunnelIcon className='w-5' />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52'
          >
            {filter.items.map((l, k) => {
              return (
                <li key={k}>
                  <a
                    onClick={() => updateFilterParam(l)}
                    className={`${l === filterParam && 'text-success'}`}
                  >
                    {l}
                  </a>
                </li>
              )
            })}
            <div className='divider mt-0 mb-0'></div>
            <li>
              <a onClick={() => updateFilterParam('')}>Remove Filter</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchComponent
