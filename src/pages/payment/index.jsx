import { useRouter } from 'next/router';
import { useContext } from "react"

import { stateContext } from '../../stateContext';

import styles from './styles.module.scss'


export default function Payment (){
  const { quantidade,
          React,
          Vue,
          Angular,
          } = useContext(stateContext)
  const router = useRouter()

  function pushUser(){
    return router.push('/')
  }

  function handleSendOrder(){

    if(!(React) && !(Vue) && !(Angular)){
      return alert('Carrinho vazio')
    }else if(quantidade === 0){
      return alert('Adcione algo ao carrinho')
    }

    alert("Compra efetuada")
  }

  return(
    <main className={styles.Container}>
      <form 
        onSubmit={handleSendOrder} 
        className={styles.Content}>

        <div className={styles.backgroundTopak}>
        <img src="../../../images/backgroundTopCheckout.svg" alt="" />
        </div>

        <div className={styles.PersonalInfo}>
        <span>Insira suas informações para pagamento:</span>

        <label htmlFor="#email">
            Email
            <input type="text"
             id="email"
             placeholder='  Insira o Email' 
             />
            </label>

            <div>
            <label htmlFor="#senha">
            Senha
            <input type="text"
             id="email"
             placeholder='  Insira a Senha' 
             />
            </label>

            <label htmlFor="#comfirmarSena">
             Confirmar Senha
            <input type="text"
             id="comfirmarSena"
             placeholder='  Comfirme a Senha' 
             />
            </label>

            <label htmlFor="#telefone">
            Telefone
            <input type="text"
             id="telefone"
             placeholder='  Insira o Telefone' 
             />
            </label>
            </div>

            <label htmlFor="#endereco">
            Endereço
            <input type="text"
             id="endereco"
             placeholder='  Exemplo: Rua 16, bairro Bela Vista, numero 104, Cuiabá' 
             />
            </label>

        </div>

        <div className={styles.productInfo}>
        <span >
        Produtos selecionados
        </span>

        <div className={styles.adesivos}>
        <label htmlFor="#react">
            <input type="checkbox"
             defaultValue='React' 
             id="react"
             defaultChecked={React}
             /> 
             
             <span>React</span>
            </label>

            <label htmlFor="#vue">
            <input type="checkbox"
             defaultValue='Vue'  
             id="vue"
             defaultChecked={Vue}
             /> 
             
             <span>Vue</span>
            </label>

            <label htmlFor="#angular">
            <input type="checkbox"
             defaultValue='Angular'  
             id="angular"
             defaultChecked={Angular}
             /> 

             <span>Angular</span>
            </label>
        </div>


            <div className={styles.quantidadeAdesivo}>
              <span>Quantos adesivos de  cada:</span>
              <input
              data-testid="displayQuantidade"  
              type="number"
              defaultValue={quantidade}
              />
            </div>
        </div>

        <div className={styles.enviar}>
            <button type='submit'>Enviar</button>
            <a type='button' 
            onClick={pushUser}>
              <img src="../../../images/LeftArrow.svg" alt="" />
            </a>
          </div>

      </form>
    </main>
  )
}