export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// use as follows: formatter.format(2500)
// I used it like this: <h2>{formatter.format(props.total)}</h2> and it rendered all my cards formatted