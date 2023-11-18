import { FC } from 'react'
import SubtitleComponent from './SubtitleComponent'

interface TitleCardProps {
  title: string
  children: React.ReactNode
  topMargin?: string
  TopSideButtons?: React.ReactNode
}

const TitleCardComponent: FC<TitleCardProps> = ({
  title,
  children,
  topMargin,
  TopSideButtons
}) => {
  return (
    <div
      className={
        'card w-full p-6 bg-base-100 shadow-xl ' + (topMargin || 'mt-6')
      }
    >
      {/* Title for Card */}
      <SubtitleComponent styleClass={TopSideButtons ? 'inline-block flex items-center justify-between' : ''}>
        <h3>{title}</h3>

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className='inline-block float-right'>{TopSideButtons}</div>
        )}
      </SubtitleComponent>

      <div className='divider mt-2'></div>

      {/** Card Body */}
      <div className='h-full w-full pb-6 bg-base-100'>{children}</div>
    </div>
  )
}

export default TitleCardComponent
