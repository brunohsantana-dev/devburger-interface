import Logo from '../../assets/login-page/logo.png'
import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles'

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Ola, seja bem vindo ao <span>Dev Burger!</span>
          <br /> Acesse com o seu <span>Login e Senha</span>.
        </Title>
        <Form>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" />
          </InputContainer>

          <Button>Entrar</Button>

          <Link>Esqueci minha senha</Link>
        </Form>
        <Link>Nao possui conta? Clique aqui</Link>
      </RightContainer>
    </Container>
  )
}
