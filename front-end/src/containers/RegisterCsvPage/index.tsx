import { ChangeEvent, MouseEvent, useState } from 'react';
import csvToJson from 'csvtojson';
import * as Styled from './styles';
import { IRegisterMovement } from '@/protocols/moviment/IResgisterMovement';
import Preview from '@/components/Preview';
import * as Global from '@/styles/global-styles';
import Button from '@/components/Button';
import { MOVEMENT_REGISTER } from '@/api';
import useFetch from '@/helper/useFetch';
import { IMessage } from '@/protocols/IMessage';
import { getLocalStorage } from '@/helper/localStorage';
import Error from '@/components/Error';
import { useRouter } from 'next/router';
import { json } from 'stream/consumers';


interface ICsvFile {
  data_do_lancamento_financeiro: string;
  documento_recebedor: string;
  valor: number;
}

export default function RegisterCsvPage() {
  const router = useRouter();
  const [dataMovement, setDataMovement] = useState<IRegisterMovement[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [csvError, setCsvError] = useState<boolean>(false);

  const { loading, error, request } = useFetch<IMessage>();

  function handleStringJson(jsonString: string) {
    const headers = ['data_do_lancamento_financeiro', 'documento_recebedor', 'valor'];
    let csvOk = true;

    headers.forEach((header) => { 
      console.log(jsonString.includes(header));
      if(!jsonString.includes(header)) csvOk = false;
    });
    
    if(!csvOk) {
      setCsvError(true);
      setDataMovement([]);
      return;
    };

    setCsvError(false);

    const data: IRegisterMovement[] = []
    JSON.parse(jsonString).forEach( (movement: ICsvFile) => {
      data.push({
        cpf: movement.documento_recebedor,
        date_launch: movement.data_do_lancamento_financeiro,
        value: movement.valor
      })  
    });    
    setDataMovement(data);
  }

  function handleCsv (event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files;    
    if(!file || file.length <= 0) return;

    setFileName(file[0].name)

    const reader = new FileReader();
    reader.onload = async () => {
      const csvText = reader.result as string;

      const json = await csvToJson({
        headers: ['data_do_lancamento_financeiro', 'documento_recebedor', 'valor'],
        delimiter: ';',
      }).fromString(csvText);
      const jsonString = JSON.stringify(json, null, 2);
      handleStringJson(jsonString);
    };
    reader.readAsText(file[0]);
  }

  async function handleSubmit(event: MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const token = getLocalStorage('token') as string;
    const {url, options} = MOVEMENT_REGISTER(dataMovement, token)
    const {response, json} = await request(url, options);
    if(response && response.ok) {
      console.log('enviou', json);
      router.push('/csv');
    };
  }
  
  return (
    <Styled.Wrapper>
      <Styled.InputCsv>
        <Styled.Label htmlFor="csv-file">Selecione um CSV</Styled.Label>
        <input type="file" id="csv-file" accept=".csv" onChange={handleCsv} />
        {
          fileName && 
          <p>Arquivo selecionado: <span>{fileName}</span></p>
        }
      </Styled.InputCsv>
      { dataMovement.length > 0 && 
        <>
          <Global.Title>Preview</Global.Title>
          <Preview movements={dataMovement}/>
          <Button text='Salvar' loading={loading} onClick={handleSubmit}/>
        </>
      }
      {error.value && <Error message={error.message}/>}
      {csvError && <Error message={'CSV com campos incorretos.'}/>}
    </Styled.Wrapper>
  )
}