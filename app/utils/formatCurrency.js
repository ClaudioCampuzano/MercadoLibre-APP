const formatCurrency = ({ currency, amount }) => {
  const formatedAmount = new Intl.NumberFormat('ES', {
    currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(amount);

  return `$ ${formatedAmount}`;
};

export { formatCurrency };
