import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const [ repositorios, setRepositorios ] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/aws/repos')
    .then(response => response.json())
    .then(data => setRepositorios(data))
  }, []) 

  return (
    <div>  
        
       
       <h2>Listagem de repositórios</h2> 
       
       <ul>
         { repositorios.map(repositorio => {
           return (
             <ul>
               <li>  
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

