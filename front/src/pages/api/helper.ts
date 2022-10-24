const API_DOMAIN = 'http://localhost:5000'

export const doGet = async <T>(endpoint: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(`${API_DOMAIN}${endpoint}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(err => reject(err));
  })
}

export const doPost = async <T>(endpoint: string, body: object): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(`${API_DOMAIN}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(resolve)
    .catch(err => reject(err));
  })
}