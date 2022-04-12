import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;
const HeaderText = styled.Text`
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  padding: 5px 10px;
  background-color: #eee;
  font-size: 18px;
  margin: 10px 0;
  border-radius: 10px;
`;
const CalcButton = styled.Button``;
const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;
const ResultItem = styled.Text`
  font-size: 15px;
  margin-top: 5px;
`;
const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
  width: 90%;
  justify-content: space-evenly;
`;
const PctItem = styled.Text`
  background-color:#007AFF;
  width:45px;
  height:45px;
  color:#FFF;
  font-size:17px;
  padding-top:10px;
  text-align:center;
  border-radius:30px;
`;

const App = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(10);
  const [pct, setPct] = useState(10);
  const [disabled, setDisabled] = useState(true);

  const Calc = (e) => {
    let nBill = parseFloat(bill.replace(',', '.'));
    if (nBill) {
      setTip((nBill * (pct / 100)).toFixed(2));
      setDisabled(false);
    } else {
      e === 'batata'?'': alert('Coloque o valor da conta!')
    }
  };
  useEffect(() => {
    Calc('batata');
  }, [pct, bill]);
  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Valor da conta"
        keyboardType="numeric"
        value={bill}
        onChangeText={e => setBill(e)}
      />
      <PctArea>
        <PctItem onPress={() => setPct(5)}>5%</PctItem>
        <PctItem onPress={() => setPct(10)}>10%</PctItem>
        <PctItem onPress={() => setPct(15)}>15%</PctItem>
        <PctItem onPress={() => setPct(20)}>20%</PctItem>
      </PctArea>
      <CalcButton title={`Calcular (${pct}%)`} onPress={Calc} />
      {!disabled && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>{`R$ ${parseFloat(bill.replace(',', '.')).toFixed(
            2,
          )}`}</ResultItem>
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>{`R$ ${tip} (${pct}%)`}</ResultItem>
          <ResultItemTitle>Valor da Total</ResultItemTitle>
          <ResultItem>{`R$ ${(
            parseFloat(bill.replace(',', '.')) + parseFloat(tip)
          ).toFixed(2)}`}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};

export default App;
