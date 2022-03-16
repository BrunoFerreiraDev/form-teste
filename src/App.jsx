import './styles/app.scss'
import {useState} from 'react'

function App() {

  const [quantidade, setQuantidade] = useState(0)

  const [React, setReact] = useState('')
  const [Vue, setVue] = useState('')
  const [Angular, setAngular] = useState('')

  function handleCreateOrder() {
    alert(`Adesivos selecionados:  ${React } ${Vue } ${Angular } \nQuantidade: ${quantidade}
    `)
  }

  return (
    <main className='Container'>

      <form onSubmit={handleCreateOrder} className='Content'>
         <div id="backgroundTop">
         <img src="../images/backgroundTop.svg" alt="background Top" />  
         </div>

          <div className="info">
            <span>Formulálario  </span>
            <span>para compra de </span>            
            <span>Pacote de adesivos  </span>
          </div>

          <div className="quaisAdesivos">
            <span>
            Quais adesivos:
            </span>

            <label htmlFor="#react">
            <input  type="checkbox" value='React' id="react" onChange={event => setReact(event.target.value)}/> <span>React</span>
            </label>
            <label htmlFor="#vue">
            <input type="checkbox" value='Vue'  id="vue" onChange={event => setVue(event.target.value)}/> <span>Vue</span>
            </label>
            <label htmlFor="#angular">
            <input type="checkbox" value='Angular'  id="angular" onChange={event => setAngular(event.target.value)}/> <span>Angular</span>
            </label>
          </div>

          <div className="quantidadeAdesivos">
            <span>Quantos adesivos de  cada?</span>
            <div className="display">

              <button type='button' onClick={()=> quantidade===0?setQuantidade(quantidade):setQuantidade(quantidade - 1)}>
                <img src="../images/menos.svg" alt="" />
              </button>

              <input  type="text" value={quantidade} onChange={event => setQuantidade(event.target.value)} />

              <button type='button' onClick={()=> setQuantidade(quantidade + 1)}>
                <img src="../images/mais.svg" alt="" />
              </button>

            </div>
          </div>

          <div className="observacoes">

            <span>
              Observações:
            </span>

            <label htmlFor="#observacoes">
                <textarea name="observacoes" id="observacoes" cols="30" rows="10" placeholder='Alguma Duvida?  Recado?'/>
            </label>

          </div>
          
          <div className="enviar">
            <button type='submit'>Enviar</button>
          </div>
      </form>

    </main>
  );
}

export default App;
