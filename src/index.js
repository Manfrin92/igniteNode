const express = require("express");
const { v4: uuidv4 } = require("uuid");
const {
  checkIfCpfIsAlreadyRegistered,
  getBalance,
} = require("./utils/account.util");

const app = express();

app.use(express.json());

const customers = [];

// Middlewares
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find(
    (registeredCustomer) => registeredCustomer.cpf === cpf
  );

  if (!customer) {
    return response.status(404).json({ error: "Customer not found" });
  }

  request.customer = customer;

  return next();
}

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  if (cpf && name) {
    const cpfAlreadyRegistered = checkIfCpfIsAlreadyRegistered(customers, cpf);

    if (cpfAlreadyRegistered) {
      return response.status(400).send({ error: "Cpf already registered" });
    }

    const id = uuidv4();

    const newAccount = {
      id,
      cpf,
      name,
      statement: [],
    };

    customers.push(newAccount);

    return response.status(201).send(newAccount);
  } else {
    return response.status(400).send({ error: "Missing required field" });
  }
});

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  return response.json(request.customer);
});

app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { description, amount } = request.body;

  if (!description || !amount) {
    return response.status(400).json({ error: "Missing required field" });
  }

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();
});

app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (amount > balance) {
    return response.status(400).json({ error: "No funds" });
  }

  const statementOperation = {
    description: "withdraw",
    amount,
    created_at: new Date(),
    type: "debit",
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();
});

app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { date } = request.query;

  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter(
    (registeredStatement) =>
      registeredStatement.created_at.toDateString() ===
      new Date(dateFormat).toDateString()
  );

  return response.json(statement);
});

app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  return response.json(request.customer);
});

app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { name } = request.body;

  customer.name = name;

  return response.status(201).send();
});

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  customers.splice(customers.indexOf(customer), 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("Server started at 3333.");
});
