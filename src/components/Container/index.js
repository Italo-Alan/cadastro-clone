import { 
  ContainerTotal,
  Title,
  Wrapper,
  InputText,
  TitleLogin,
  TitleLoginLitle,
  Column,
  Form
} from './styles';
import React from 'react';
import Button from '../Button';
import { ButtonContainerSubmit } from '../Button/styles';

const Container = () =>{
  return (
    <ContainerTotal>
      <Column>
        <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
      </Column>
      <Column>
        <Form>
          <TitleLogin>Faça cadastro</TitleLogin>
          <TitleLoginLitle>Faça seu login e mahe the change</TitleLoginLitle>
          <InputText placeholder="Nome completo"></InputText>
          <InputText placeholder="Email"></InputText>
          <InputText placeholder="Senha"></InputText>
          <Button className="submit" title="Entrar"/>
        </Form>
      </Column>
    </ContainerTotal>
  )
}

export default Container;
