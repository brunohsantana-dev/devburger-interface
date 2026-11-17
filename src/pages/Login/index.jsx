import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import Logo from '../../assets/login-page/logo.png'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
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
      email: yup
        .string()
        .email('Digite um email valido')
        .required('Email obrigatorio'),
      password: yup
        .string()
        .min(6, 'A senha deve contem pelo menos 6 caracteres')
        .required('Senha obrigatoria'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/sessions', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando dados',
        success: 'Seja bem vindo(a)',
        error: 'Email ou senha incorretos',
      },
    )
    console.log(response)
  }

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
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>

          <Link>Esqueci minha senha</Link>
        </Form>
        <Link>Nao possui conta? Clique aqui</Link>
      </RightContainer>
    </Container>
  )
}
