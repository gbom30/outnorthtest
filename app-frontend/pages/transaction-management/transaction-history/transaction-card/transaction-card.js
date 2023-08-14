import { Container } from "./transaction-card.styles";

const TransactionCard = (props) => {

  const negativeAmount = (amount) => {
    return amount < 0;
  };

  return (
    <Container
      data-type="transaction"
      data-account-id={`${props.transaction.account_id}`}
      data-amount={`${props.transaction.amount}`}
      data-balance={`${props.current_balance}`}
      >   
        {negativeAmount(props.transaction.amount) ? " Withdrawn " : " Transferred "} 
        {props.transaction.amount}$ 
        {negativeAmount(props.transaction.amount) ? " from " : " to "} account 
        {" " + props.transaction.account_id }
   
      {props.current_balance && <p>The current account balance {props.current_balance}$</p>}      
    </Container>
  );
}

export default TransactionCard;
