import { render, screen } from '@testing-library/react';
import AddTransaction from '../transaction-management/add-transaction/add-transaction';

test('renders learn react link', () => {
  render(<AddTransaction />);
  const header = screen.getByText(/Submit new transaction/i);
  expect(header).toBeInTheDocument();
});

test('account input field should be in the component', () => {
  render(<AddTransaction />);
  const inputFieldAccountId = screen.getByPlaceholderText("Account Id");
  expect(inputFieldAccountId).toBeInTheDocument();
});

test('amount input field should be in the component', () => {
  render(<AddTransaction />);
  const inputFieldAmount = screen.getByPlaceholderText("Amount");
  expect(inputFieldAmount).toBeInTheDocument();
});

test('init account id', () => {
  render(<AddTransaction />);
  const account_id = screen.getByTestId("account_id").value;
  expect(account_id).toBe("");
});

test('init amount', () => {
  render(<AddTransaction />);
  const amount = screen.getByTestId("amount").value;
  expect(amount).toBe("");
});