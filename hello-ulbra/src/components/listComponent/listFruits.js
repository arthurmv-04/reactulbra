import '../../App.css';
import Title from '../titleComponent/title';
 
function ListFruits() {
  return (
    <>
        <Title>Lista de Frutas</Title>
        <div>
            <ul>
                <li className="abacaxi">Abacaxi</li>
                <li className="pera">Pêra</li>
                <li className="banana">Banana</li>
                <li className="laranja">Laranja</li>
                <li className="morango">Morango</li>
            </ul>
        </div>
    </>
    
  );
}

export default ListFruits;
