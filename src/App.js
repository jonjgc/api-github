import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const [ repositorios, setRepositorios ] = useState([]);
  const [ itemsPagina, setItemsPagina ] = useState(3);
  const [ paginaAtual, setPaginaAtual ] = useState(0)
  const startRepositorios = paginaAtual * itemsPagina;
  const endRepositorios = startRepositorios + itemsPagina;
  const RepositorioAtual = repositorios.slice(startRepositorios, endRepositorios);
  const [ busca, setBusca ] = useState('');
  const paginas = Math.ceil(repositorios.length / itemsPagina);


  

  useEffect(() => {
    const fetchData = async () => {
     const result = await fetch('https://api.github.com/users/aws/repos')
      .then(response => response.json())
      .then(data => setRepositorios(data))
    }
    fetchData()
  }, []) 

  return (
    <div>  
       
       <h2>Listagem de repositórios</h2> 

       <div id="paginacao"> 
          {Array.from(Array(paginas), (repositorios, index) => {
            return <button value={index} onClick={(e) => setPaginaAtual(Number(e.target.value))} class="btn btn-primary">{index}</button>
          })}
       </div> 
       
       <ul>
         
         { RepositorioAtual.map(repositorio => {
           return (
            
             <ul>
               <li>  
                  <h3>{repositorio.name}</h3>
                  <p><strong>Linguagem:</strong> {repositorio.language}</p>
                  <p><strong>Descrição:</strong> {repositorio.description}</p>
                  <p><strong>Quantidade de Issues abertas:</strong> {repositorio.open_issues_count}</p>
                  <p><strong>Data de criação:</strong> {repositorio.created_at}</p>

                  <a href={repositorio.html_url} target="_blank" rel="noreferrer" id="info">Saiba mais</a>
               </li>
             </ul>  
           )
         }) }
        </ul>

     
    </div>
  );
}
