export default function Intro(){
    const name = 'Pietro';
    const surname = 'Grigolo'
    
    return(
        <div>
            <ul>
                <li>
                    Nome: {name}
                </li>
                <li>
                    Cognome: {surname}
                </li>
            </ul>
        </div>
    );
}