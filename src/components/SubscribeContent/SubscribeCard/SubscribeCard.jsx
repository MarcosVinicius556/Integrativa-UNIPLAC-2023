import { useState } from 'react';
import './subscribe-card.css';

//Estes dois arrays posteriormente seriam removidos, pois estes dados viriam da api
const alunos = [
    {
        id: 1,
        nome: 'Marcos',
    },
    {
        id: 2,
        nome: 'Kátia',
    },
    {
        id: 3,
        nome: 'Nicholas',
    },
    {
        id: 4,
        nome: 'Victor',
    },
    {
        id: 5,
        nome: 'Lucas',
    },
    {
        id: 6,
        nome: 'Anderson'
    }
];

const fases = [
    {
        id: 1,
        nome: 'Primeira fase',
    },
    {
        id: 2,
        nome: 'Segunda fase',
    },
    {
        id: 3,
        nome: 'Terceira fase',
    },
    {
        id: 4,
        nome: 'Quarta fase',
    },
    {
        id: 5,
        nome: 'Quinta fase',
    },
    {
        id: 6,
        nome: 'Sexta fase',
    },
    {
        id: 7,
        nome: 'Sétima fase',
    },
    {
        id: 8,
        nome: 'Oitava fase'
    }
]

function SubscribeCard() {

    const[ aluno, setAluno ] = useState('placeHolder');
    const[ fase, setFase ] = useState('placeHolder');

    const handleChangeAluno = (e) => {
        // console.log(e.target.value);
        setAluno(e.target.value);
    }

    const handleChangeFase = (e) => {
        // console.log(e.target.value);
        setFase(e.target.value);
    }

    return (
        <div className="card">
            <h1 className="card-title">Cadastrar</h1>
            <form className="form-cadastro">

                <div className="card-box-column" id='cad-form'>
                    <input type="text" name="name" id="inputNovoLogin" className='input-card' required placeholder='Nome de usário ou email'/>
                    <input type="password" name="pass" id="inputNovaSenha" className='input-card' required placeholder='Senha'/>

                    <div className="card-box-row" id='combobox'>
                    <select value={aluno} className='combobox' id='alunos' onChange={(e) => handleChangeAluno(e)}>
                        <option disabled={true} value='placeHolder' key='placeHolder'>Aluno</option>
                        {
                            alunos.map(aluno => (
                                <option key={aluno.id}>{aluno.nome}</option>        
                            ))
                        }
                    </select>
                    <select value={fase} className='combobox' onChange={(e) => handleChangeFase(e)}>
                        <option disabled={true} value='placeHolder' key='placeHolder'>Fase</option>
                        {
                            fases.map(fase => (
                                <option key={fase.id}>{fase.nome}</option>        
                            ))
                        }
                    </select>
                    </div>
                </div>
                <input type="submit" value="Cadastrar" className='inputSubmit' id='cadastrar'/>
            </form>
        </div>
    );
}

export default SubscribeCard;