import {render, screen, fireEvent} from '@testing-library/react'
import Home from '../pages'

describe('Home component', ()=>{

    it('should render correctly the form', ()=>{
        render(<Home/>)

        expect(screen.getByText("Formulálario")).toBeInTheDocument()
        expect(screen.getByText("para compra de")).toBeInTheDocument()
        expect(screen.getByText("Pacote de adesivos")).toBeInTheDocument()
        expect(screen.getByText("Quais adesivos:")).toBeInTheDocument()
        expect(screen.getByText("React")).toBeInTheDocument()
        expect(screen.getByText("Vue")).toBeInTheDocument()
        expect(screen.getByText("Angular")).toBeInTheDocument()
        expect(screen.getByText("Quantos adesivos de cada?")).toBeInTheDocument()
        expect(screen.getByText("Observações:")).toBeInTheDocument()
        expect(screen.getByText("Enviar")).toBeInTheDocument()

    })

    it('should add one more or subtract minus one on the display',()=>{
        render(<Home/>)
        const buttonAddMais = screen.getByTestId("mais")
        const buttonAddMenos = screen.getByTestId("menos")
        const inputHandleAmount = screen.getByTestId("displayQuantidade")


        fireEvent.click(buttonAddMenos)
        expect(inputHandleAmount).toHaveDisplayValue(0)

        fireEvent.click(buttonAddMais)
        fireEvent.click(buttonAddMais)
        expect(inputHandleAmount).toHaveDisplayValue(2)

        fireEvent.click(buttonAddMenos)
        fireEvent.click(buttonAddMenos)
        fireEvent.click(buttonAddMenos)
        expect(inputHandleAmount).toHaveDisplayValue(0)

        fireEvent.type(inputHandleAmount,'10')
        expect(inputHandleAmount).toHaveDisplayValue(10)


        fireEvent.click(buttonAddMenos)
        expect(inputHandleAmount).toHaveDisplayValue(9)
        
    })

    it('shoud add text on the textarea observações',()=>{
        render(<Home/>)
        const inputObservacao = screen.getByPlaceholderText("Alguma Duvida? Recado?")

        fireEvent.type(inputObservacao,'nehuma')
        expect(inputObservacao).toHaveDisplayValue('nehuma')
    })

    it("submitting the form calls onSubmit with value and coin", () => {
        render(<Home />)
        const buttonEnviar = screen.getByText("Enviar")

        fireEvent.click(buttonEnviar)

        expect(screen.getByText("Enviar")).toBeTruthy();
    })
})