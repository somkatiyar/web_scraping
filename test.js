async function fetchData() {
  try {
    const response = await printMsg();
   console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

function printMsg() {
  setTimeout(() => {
    return 'som'
  }, 5000);
}

fetchData();