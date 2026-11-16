import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Logo from '../../assets/login-page/logo.png'
import { Button } from '../../components/Button'
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from './styles'

export function Login() {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" {...register('password')} />
          </InputContainer>

          <Button type="submit">Entrar</Button>

          <Link>Esqueci minha senha</Link>
        </Form>
        <Link>Nao possui conta? Clique aqui</Link>
      </RightContainer>
    </Container>
  )
}
