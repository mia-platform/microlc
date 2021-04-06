import React, {useCallback, useState} from 'react'
import {Dropdown, Menu} from 'antd'
import {User} from '@mia-platform/core'
import classNames from 'classnames'
import {FormattedMessage} from 'react-intl'

import {logOutUser} from '@services/microlc/user.service'

import './UserMenu.less'

const retrieveUserAvatar = (user: Partial<User>) => {
  const fallbackUrl = `https://eu.ui-avatars.com/api/?name=${user.name || ''}&size=24x24`
  return user.avatar || fallbackUrl
}

export const UserMenu: React.FC<Partial<User>> = (user) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false)
  const dropdownChanged = useCallback(() => {
    setDropdownOpened((wasOpened) => !wasOpened)
  }, [setDropdownOpened])
  const logOut = useCallback(() => {
    logOutUser().subscribe(() => window.location.reload())
  }, [])

  const overlayMenu = (
    <Menu>
      <Menu.Item className='userMenu_entry'>
        <span className='userMenu_logout' onClick={logOut}>
          <FormattedMessage id='logout'/>
        </span>
      </Menu.Item>
    </Menu>
  )

  const iconClasses = classNames('fas', 'fa-chevron-down', 'userMenu_icon', {opened: dropdownOpened})

  return (
    <Dropdown
      arrow
      onVisibleChange={dropdownChanged}
      overlay={overlayMenu}
      placement='bottomCenter'
      trigger={['click']}
    >
      <div className='userMenu_container' data-testid='userMenu_container'>
        <i className={iconClasses}/>
        <span className='userMenu_name'>{user.name}</span>
        <img alt='Avatar' className='userMenu_avatar' src={retrieveUserAvatar(user)}/>
      </div>
    </Dropdown>
  )
}
