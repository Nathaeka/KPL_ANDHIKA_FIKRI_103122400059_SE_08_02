async function fetchOrderAPI(orderId, token) {
  const response = await fetch(`https://example.com/api/order/${orderId}`, {
    headers: { 'Authorization': token }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch order details');
  }

  return response.json();
}

function renderOrderDetails(order) {
  const detailsDiv = document.querySelector('#orderDetails');
  
  detailsDiv.innerHTML = `
    <h3>Order ID: ${order.id}</h3>
    <p>Status: ${order.status}</p>
  `;
}

function setupModalUI(order, token) {
  const modal = document.getElementById('orderModal');
  const closeBtn = modal.querySelector('.close');
  const confirmBtn = document.querySelector('#confirmOrderBtn');

  modal.style.display = 'block';

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  if (order.status === 'Delivered') {
    confirmBtn.style.display = 'none';
  } else {
    confirmBtn.style.display = 'inline-block';
    confirmBtn.onclick = () => {
      confirmOrder(order.id, token);
      modal.style.display = 'none';
    };
  }
}

async function handleOrderDetailsClick(orderId, token) {
  try {
    const order = await fetchOrderAPI(orderId, token);
    renderOrderDetails(order);
    setupModalUI(order, token);
  } catch (error) {
    console.error('Error fetching order details:', error);
  }
}