import chefClaudeLogo from '../assets/Chef_Claude_Icon.png'

export default function Header() {
  return (
      <header className={'chef-claude-header'}>
        <img src={chefClaudeLogo} alt={'Chef Claude logo'}/>
        <div>Chef Claude</div>
      </header>
  )
}
