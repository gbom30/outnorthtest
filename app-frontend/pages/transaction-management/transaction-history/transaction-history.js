import { useEffect, useState } from "react";
import TransactionCard from "./transaction-card/transaction-card";
import { Container, HistoryItemContainer, Header } from "./transaction-history.styles";
import LoadingSpinner from "../../../components/shared/fragments/loading-spinner/loading-spinner";
import ErrorMessage from "../../../components/shared/fragments/error-message/error-message";

const TransactionHistory = (props) => {
    const [loading, setIsLoading] = useState([]);
    const [error, setError] = useState([]);
    const [account, setAccount] = useState();

    useEffect(() => {   
      async function getTransactionHistory() {
          const url = '/api/transactionHistoryHandler'
          const res = await fetch(url);
          const data = await res.json();
          props.setData(data.success.slice());
        };
        getTransactionHistory();  
        console.log("UseEffect")
    }, []);

    useEffect(() => {   
      setIsLoading(true);
      setError(null);

      if(emptyAccountId()) {
          return;
      }

      async function getAccount() {
          let postBody = {
              "accountid": props.data[0]?.account_id.toString(),
          }
          
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
          }

          const url = '/api/accountHandler'
          const res = await fetch(url, options);
          const data = await res.json();
          const account = data.success;
          setAccount(account); 
        };
        getAccount(); 
        setIsLoading(false);    
    }, [props.data]);

    const emptyAccountId = () => {
      if(!props.data[0]?.account_id) {
        return true;
      }
      else {
        return false;
      }
    };

    return (
      <Container>         
        <HistoryItemContainer>       
          {!loading && !error && props.data.length > 0 &&   
            <>
             <Header className="fs-primary-heading">Transaction History</Header>
            {
                props?.data?.map((transaction, index) => {
                    return <TransactionCard current_balance={index < 1 ? account?.balance : ""} key={index} transaction={transaction} />
                })
            }
            </>
            }
        </HistoryItemContainer>
        
        {loading &&
            <LoadingSpinner />
        }
        {!loading && error &&
            <ErrorMessage text={error} />
        }
      </Container>
    );
  }
  
  export default TransactionHistory;
  