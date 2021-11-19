import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const [ repositorios, setRepositorios ] = useState([]);
  const [ busca, setBusca ] = useState("");
  console.log(busca);

  //const repfiltrados = repositorios.filter((repositorio) => repositorio.startswith(busca));

  useEffect(() => {
    fetch('https://api.github.com/users/aws/repos')
    .then(response => response.json())
    .then(data => setRepositorios(data))
  }, []) 

  return (
    <div>  
        
       
       <h2>Listagem de repositórios</h2> 
       
       <nav class="navbar navbar-light bg-light offset-sm-9">
          <form class="form-inline offset-sm-2">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </nav>

       <ul>
         { repositorios.map(repositorio => {
           return (
             <ul>
               
               <li key={repositorio}>  
                  <h3>{repositorio.name}</h3>
                  <p><strong>Linguagem:</strong> {repositorio.language}</p>
                  <p><strong>Descrição:</strong> {repositorio.description}</p>
                  <p><strong>Quantidade de Issues abertas:</strong> {repositorio.open_issues_count}</p>
                  <p><strong>Data de criação:</strong> {repositorio.created_at}</p>

                  <a href={repositorio.html_url} target="_blank" rel="noreferrer">Saiba mais</a>
               </li>

             </ul>  
           )
         }) }
        </ul>

    </div>
  );
}
