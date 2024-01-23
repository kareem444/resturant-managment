import { IMAGE_SRC } from '../../../common/constants/SrcConstants'
import { Link } from 'react-router-dom'
import SwitchThemeComponent from '../../../common/components/SwitchTheme'
import SwitchLanguageComponent from '../../../common/components/SwitchLanguageComponent'
import { useTranslate } from '../../../common/hooks/useTranslate'
import useCurrentUser from 'src/common/hooks/useCurrentUser'

export default function HeaderDropDownMenuComponent() {
  const { isArabic } = useTranslate()

  const { deleteCurrentUser } = useCurrentUser()

  return (
    <div
      className={`dropdown ${isArabic ? 'dropdown-right' : 'dropdown-end'
        }`}
    >
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src={IMAGE_SRC.logo} alt='profile' />
        </div>
      </label>
      <ul
        tabIndex={0}
        className={`menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 ${isArabic ? 'mt-10' : 'mt-3'
          }`}
      >
        <li className=''>
          <Link to={'/app/admin/settings'}>Settings</Link>
        </li>
        <li className=''>
          <span className='hover:bg-base-100 pointer-events-none flex justify-between items-center'>
            <span>Language</span>
            <span>
              <SwitchLanguageComponent />
            </span>
          </span>
        </li>
        <li className=''>
          <span className='hover:bg-base-100 pointer-events-none flex justify-between'>
            <span>Mode</span>
            <span className='mx-3'>
              <SwitchThemeComponent />
            </span>
          </span>
        </li>
        <div className='divider mt-0 mb-0'></div>
        <li>
          <a onClick={deleteCurrentUser}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}
