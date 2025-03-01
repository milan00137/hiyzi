import { HiyziLogo } from './HiyziLogo'

type Props = object

export default function Header({}: Props) {
  return (
    <header className='flex justify-center py-4 -mb-28'>
        <HiyziLogo className='text-sky-800 z-10 cursor-pointer'/>
    </header>
  )
}