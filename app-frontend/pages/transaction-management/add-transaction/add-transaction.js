import { useState } from 'react';
import { Container, FormContainer, IdContainer, LabelItem, AmountContainer, Input, Header } from './add-transaction.styles';
import SubmitButton from '../../../components/shared/fragments/submit-button/submit-button';

const AddTransaction = (props) => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState(0);
  const [validateInputId, setValidateInputId] = useState(false);
  const [validateInputAmount, setValidateInputAmount] = useState(false);

  async function addTransaction() {
    let postBody = {
      "id": accountId.toString(),
      "amount": amount.toString()
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  }

    const url = '/api/transactionHandler'
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  };  

  async function handleSubmit(e) {
    e.preventDefault();

    if (!accountId) {
      setValidateInputId(true);
      return;
    }
    if (!amount) {
      setValidateInputAmount(true);
      return;
    }
  
    const newTransaction = await addTransaction();
    props.setData((previous) => [newTransaction.success, ...previous]);
    resetData();
  };

  const resetData = () => {
    setAccountId("");
    setAmount("");
    setValidateInputId(false);
    setValidateInputAmount(false);
  };

  console.log("AddTransaction");

  return (
    <Container>
      <Header className="fs-primary-heading">Submit new transaction</Header>
      <FormContainer className='form-container' onSubmit={handleSubmit} >
        <IdContainer>
          <LabelItem className='label-item'>Account Id:</LabelItem>
          <Input
            type='text'
            id='id'
            placeholder={"Account Id"}
            data-testid="account_id"
            onChange={(event) => setAccountId(event.target.value)}
            className={validateInputId ? "validation-error" : ""}
            data-type="account-id"
            value={accountId}
          />
        </IdContainer>

        <AmountContainer>
          <LabelItem className='label-item'>Amount:</LabelItem>
          <Input
            type='number'
            id='amount'
            placeholder={"Amount"}
            data-testid="amount"
            onChange={(event) => setAmount(event.target.value)}
            className={validateInputAmount ? "validation-error" : ""}
            data-type="amount"
            value={amount || ""}
          />
        </AmountContainer>

        <SubmitButton>
          Submit
        </SubmitButton>
      </FormContainer>
      {validateInputId || validateInputAmount ? <p className='validation-message'>Sorry but all fields are mandatory</p> : null}     
    </Container>
  );
}

export default AddTransaction;
