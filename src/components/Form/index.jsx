export default function Form() {
  return (
    <form className="form">
      <label>
        Endereço de e-mail:
        <input type="email" placeholder="johndoe@example.com" />
      </label>
      <label>
        Sua senha:
        <input type="password" placeholder="********" />
      </label>
      <div className="checkbox">
        <div className="check"></div>
        Lembrar de mim por 30 dias
      </div>
      <button className="btn-primary" type="submit">Entrar na plataforma</button>
    </form>
  )
}