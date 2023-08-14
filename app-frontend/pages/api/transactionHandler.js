const transactionHandler = async (req, res) => {
    const url = 'https://infra.devskills.app/api/accounting/transactions';
    const bodyData = {
        "account_id": req.body.id,
        "amount": req.body.amount
      }


    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return res.end(JSON.stringify({'success': data}));
    } catch(err) {
        return res.end(JSON.stringify({'error': err.message}));
    }  
}

export default transactionHandler;
