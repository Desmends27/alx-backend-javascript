export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'Success',
  })).catch(new Error()).then(() => console.log('Got response from the API'));
}
