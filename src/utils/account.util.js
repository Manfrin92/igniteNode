function checkIfCpfIsAlreadyRegistered(customers, newCpf) {
  return customers.some(
    (customerRegistered) => customerRegistered.cpf === newCpf
  );
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === "credit") {
      return acc + operation.amount;
    }
    return acc - operation.amount;
  }, 0);

  return balance;
}

module.exports = { checkIfCpfIsAlreadyRegistered, getBalance };
