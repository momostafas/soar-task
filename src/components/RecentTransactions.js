import React from 'react';

const transactions = [
  {
    description: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    type: 'withdrawal',
  },
  {
    description: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    type: 'deposit',
  },
  {
    description: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    type: 'deposit',
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Recent Transaction</h3>
      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className={`h-10 w-10 flex items-center justify-center rounded-full ${
                  transaction.type === 'deposit' ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                {transaction.type === 'deposit' ? (
                    <i></i>
                //   <ArrowUpIcon className="h-6 w-6 text-green-500" />
                ) : (
                    <i></i>
                //   <ArrowDownIcon className="h-6 w-6 text-red-500" />
                )}
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-800">{transaction.description}</p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
            </div>
            <p
              className={`font-medium ${
                transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {transaction.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
