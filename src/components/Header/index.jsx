import logo from '../../logo.svg';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="text">
        <h1>Ignite Lab</h1>
        <span>Faça login e comece a usar!</span>
      </div>
    </div>
  )
}
