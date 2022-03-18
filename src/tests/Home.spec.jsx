import { render, screen, fireEvent } from "@testing-library/react";
import { StateProvider } from "../stateContext";
import {mocked} from 'jest-mock'
import {useRouter} from 'next/router'

import Home from "../pages";

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
        <Home />
      </StateProvider>
    );

    expect(screen.getByText("Formulálario")).toBeInTheDocument();
    expect(screen.getByText("para compra de")).toBeInTheDocument();
    expect(screen.getByText("Pacote de adesivos")).toBeInTheDocument();
    expect(screen.getByText("Quais adesivos:")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Vue")).toBeInTheDocument();
    expect(screen.getByText("Angular")).toBeInTheDocument();
    expect(screen.getByText("Quantos adesivos de cada?")).toBeInTheDocument();
    expect(screen.getByText("Observações:")).toBeInTheDocument();
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
        <Home />
      </StateProvider>
    );
    const buttonAddMais = screen.getByTestId("mais");
    const buttonAddMenos = screen.getByTestId("menos");
    const inputHandleAmount = screen.getByTestId("displayQuantidade");

    fireEvent.click(buttonAddMenos);
    expect(inputHandleAmount).toHaveDisplayValue(0);

    fireEvent.click(buttonAddMais);
    fireEvent.click(buttonAddMais);
    expect(inputHandleAmount).toHaveDisplayValue(2);

    fireEvent.click(buttonAddMenos);
    fireEvent.click(buttonAddMenos);
    fireEvent.click(buttonAddMenos);
    expect(inputHandleAmount).toHaveDisplayValue(0);

    fireEvent.change(inputHandleAmount, {target: {value: '10'}});
    expect(inputHandleAmount).toHaveDisplayValue(10);

    fireEvent.click(buttonAddMenos);
    expect(inputHandleAmount).toHaveDisplayValue(9);
  });

  it('shoud add text on the textarea observações',()=>{
        
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
          <Home />
        </StateProvider>
      );

        const inputObservacao = screen.getByPlaceholderText("Alguma Duvida? Recado?")

        fireEvent.change(inputObservacao,{target: {value: 'nehuma'}})
        expect(inputObservacao).toHaveDisplayValue('nehuma')
    })
});
