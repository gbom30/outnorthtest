import TransactionManagement from './transaction-management/transaction-management';
import StyledComponentsRegistry from './registry';

export default function Home() {


  console.log("index root")

  return (
    <div>
      <StyledComponentsRegistry>
        <TransactionManagement />    
      </StyledComponentsRegistry>
    </div>
  )
}
