if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error('quote not found');
  } else {
    throw new Error('Unexpected error');
  }