const CSS = () => {
  return `
.invoice-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

/* Main invoice styles */
.invoice {
  width: 40rem;
  padding: 16px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

/* Header styles */
.invoice-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.invoice-date {
  margin-top: 16px;
}

/* Title section */
.invoice-title {
  text-align: center;
  margin-bottom: 32px;
}

.invoice-main-title {
  font-size: 2rem;
  font-weight: bold;
}

.invoice-id {
  font-size: 1.5rem;
  margin-top: 8px;
}

/* Customer and product details */
.customer-info {
  margin-bottom: 32px;
}

.product-list {
  width: 100%;
}

.product-header,
.product-row {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.product-header {
  margin-bottom: 16px;
}

.product-column {
  width: 25%;
  text-align: center;
}

.product-row {
  margin-bottom: 8px;
  font-weight: normal;
}

/* Summary section */
.invoice-summary {
  margin-top: 32px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.summary-value {
  width: 25%;
  text-align: right;
}

.summary-row.total {
  font-weight: bold;
}

/* Thank you message */
.thank-you {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
}

.thank-you img {
  max-width: 100px;
  margin-bottom: 16px;
}
`;
};

export default CSS;
