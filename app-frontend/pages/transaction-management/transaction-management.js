import { useState } from "react";
import AddTransaction from "./add-transaction/add-transaction";
import TransactionHistory from "./transaction-history/transaction-history.js";
import { Container } from "./transaction-management.styles";

const TransactionManagement = () => {
  const [data, setData] = useState([]);

  console.log("TransactionManagement");

  return (
    <Container>
      <AddTransaction setData={setData} />
      <TransactionHistory data={data} setData={setData} />
    </Container>
  );
}

export default TransactionManagement;
