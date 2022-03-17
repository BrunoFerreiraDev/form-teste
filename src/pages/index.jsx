import { useRouter } from 'next/router';
import {useState} from 'react'
import { useContext } from "react"

import { statecontext } from '../stateContext';

import styles from './home.module.scss'


export default function Home() {
  const { quantidade,
          setQuantidade,
          React,
          setReact,
          Vue,
          setVue,
          Angular,
          setAngular} = useContext(statecontext)

  const router = useRouter();
  const [observacoes, setObservacoes] = useState('')

  function handleCreateOrder(event) {
    event.preventDefault();

    router.push('/payment')
    
  }

  return (
    <main className={styles.Container}>

      <form 
      onSubmit={handleCreateOrder} 
      className={styles.Content} 
      data-testid="form"
      >
         <img src="../../images/backgroundTop.svg"  alt="background Top" />  

          <div className={styles.info}>
            <span>Formulálario  </span>
            <span>para compra de </span>            
            <span>Pacote de adesivos  </span>
          </div>

          <div className={styles.quaisAdesivos}>
            <span>
            Quais adesivos:
            </span>

            <label htmlFor="#react">
            <input type="checkbox"
             value='React' 
             id="react"
             checked={React} 
             onChange={() =>React?setReact(false):setReact(true)}
             /> 
             
             <span>React</span>
            </label>

            <label htmlFor="#vue">
            <input type="checkbox"
             value='Vue'  
             id="vue"
             checked={Vue} 
             onChange={() =>Vue?setVue(false):setVue(true)}
             /> 
             
             <span>Vue</span>
            </label>

            <label htmlFor="#angular">
            <input type="checkbox"
             value='Angular'  
             id="angular" 
             checked={Angular} 
             onChange={() =>Angular?setAngular(false):setAngular(true)}
             /> 

             <span>Angular</span>
            </label>
          </div>

          <div className={styles.quantidadeAdesivos}>
            <span>Quantos adesivos de  cada?</span>
            <div className={styles.display}>

              <button 
              data-testid="menos"
              type='button' 
              onClick={()=> quantidade===0?'':setQuantidade(quantidade - 1)}
              >
                <img src="../images/menos.svg" alt="" />
              </button>

              <input
              data-testid="displayQuantidade"  
              type="number" 
              value={quantidade>0?quantidade:0}  
              onChange={event => setQuantidade(parseInt(event.target.value))} 
              />

              <button 
              data-testid="mais"
              type='button' 
              onClick={()=> setQuantidade(quantidade + 1)}
              >
                <img src="../images/mais.svg" alt="" />
              </button>

            </div>
          </div>

          <div className={styles.observacoes}>

            <span>
              Observações:
            </span>

            <label htmlFor="#observacoes">
                <textarea 
                id="observacoes"
                cols="30" 
                rows="10" 
                placeholder='Alguma Duvida?  Recado?'
                value={observacoes} 
                onChange={event => setObservacoes(event.target.value)}
                />
            </label>

          </div>
          
          <div className={styles.enviar}>
            <button type='submit'>Enviar</button>
          </div>
      </form>


    </main>
  );
}
