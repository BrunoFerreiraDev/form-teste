import { render, screen, fireEvent } from "@testing-library/react";
import { StateProvider } from "../stateContext";
import {mocked} from 'jest-mock'
import {useRouter} from 'next/router'

import Payment from "../pages/payment";

jest.mock('next/router')


describe("Home component", () => {
    const quantidade = 0;
    const setQuantidade = (amount) => (quantidade = amount);
    const React = false;
    const setReact = (amount) => (React = amount);
    const Vue = false;
    const setVue = (amount) => (Vue = amount);
    const Angular = false;
    const setAngular = (amount) => (Angular = amount);

  it("should render correctly the form", () => {
  

    render(
      <StateProvider
        value={{
          quantidade,
          setQuantidade,
          React,
          setReact,
          Vue,
          setVue,
          Angular,
          setAngular,
        }}
      >
        <Payment />
      </StateProvider>
    );

    expect(screen.getByPlaceholderText("Insira o Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Insira a Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Comfirme a Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Insira o Telefone")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Exemplo: Rua 16, bairro Bela Vista, numero 104, Cuiabá"))
    .toBeInTheDocument();

    expect(screen.getByText("Produtos selecionados")).toBeInTheDocument();
    expect(screen.getByText("Enviar")).toBeInTheDocument();


  });

  it("should add one more or subtract minus one on the display", () => {
    render(
      <StateProvider
        value={{
          quantidade,
          setQuantidade,
          React,
          setReact,
          Vue,
          setVue,
          Angular,
          setAngular,
        }}
      >
        <Payment />
      </StateProvider>
    );

    const email = screen.getByPlaceholderText("Insira o Email");
    const senha = screen.getByPlaceholderText("Insira a Senha");
    const comfirmarSenha = screen.getByPlaceholderText("Comfirme a Senha");
    const telefone = screen.getByPlaceholderText("Insira o Telefone");
    const endereco = screen.getByPlaceholderText("Exemplo: Rua 16, bairro Bela Vista, numero 104, Cuiabá");
    const displayQuantidade = screen.getByTestId("displayQuantidade");


    fireEvent.change(email, {target: {value: 'teste@gmail.com'}});
    expect(email).toHaveDisplayValue('teste@gmail.com');

    fireEvent.change(senha, {target: {value: '123'}});
    expect(senha).toHaveDisplayValue('123');

    fireEvent.change(comfirmarSenha, {target: {value: '123'}});
    expect(comfirmarSenha).toHaveDisplayValue('123');

    fireEvent.change(telefone, {target: {value: '65984696397'}});
    expect(telefone).toHaveDisplayValue('65984696397');

    fireEvent.change(endereco, {target: {value: 'rua 16, bela vista, numero 104, cuiabá'}});
    expect(endereco).toHaveDisplayValue('rua 16, bela vista, numero 104, cuiabá');

     fireEvent.change(displayQuantidade, {target: {value: '15'}});
    expect(displayQuantidade).toHaveDisplayValue('15');
 
  });
});
