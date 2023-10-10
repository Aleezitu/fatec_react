import styles from './AppViewer.module.css';

// Camada de Compilação de Serviços
const AppViewer = () => {
  const professores = [
    { id: 1, nome: "José Armando Vargas", idade: 42, formacao: "Engenharia da Computação", titulacao: "Lato Sensu" },
    { id: 2, nome: "Ana Maria Silva", idade: 30, formacao: "Ciência da Computação", titulacao: "Mestrado" },
    { id: 3, nome: "Carlos Oliveira", idade: 35, formacao: "Engenharia Elétrica", titulacao: "Doutorado" },
    { id: 4, nome: "Maria Eduarda Santos", idade: 28, formacao: "Sistemas de Informação", titulacao: "Graduação" },
    { id: 5, nome: "Pedro Alves", idade: 25, formacao: "Tecnologia da Informação", titulacao: "Pós-Graduação" },
    { id: 6, nome: "Lúcia Pereira", idade: 38, formacao: "Engenharia de Software", titulacao: "Lato Sensu" },
    { id: 7, nome: "Fernando Garcia", idade: 29, formacao: "Ciência da Computação", titulacao: "Doutorado" },
    { id: 8, nome: "Rita Souza", idade: 31, formacao: "Engenharia Eletrônica", titulacao: "Mestrado" },
    { id: 9, nome: "Gustavo Mendes", idade: 27, formacao: "Engenharia de Redes", titulacao: "Pós-Graduação" }
  ];

  return (
    <>
      <h2>Lista de professores</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Formação</th>
            <th>Titulação</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr className={professor.id % 2 == 1 ? styles.linhaCinza : ''} key={professor.id}>
              <td>{professor.id}</td>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formacao}</td>
              <td className={professor.titulacao === "Mestrado" || professor.titulacao === "Doutorado" ? styles.superTitulo : styles.normalTitulo}>
                {professor.titulacao}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default AppViewer;