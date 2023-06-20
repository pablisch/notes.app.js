class NotesClient {
  loadData(callback) {
    fetch('http://localhost:3000/notes')
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => callback(error));
  }
  // loadData(callback, reject) {
  //   fetch('http://localhost:3000/notes')
  //     .then((response) => response.json())
  //     .then((data) => callback(data))

  // }

  handleErrors(response) {
    // console.log(response);  // VISIBILITY
    if (!response.ok) {
      throw Error(response);
    }
    return response;
  }

  // createNote(callback) {
  //   fetch('http://localhost:3000/notes')
  //     .then((response) => response.json())
  //     .then((data) => callback(data));
  // }

  async createNote(data) {
    try {
      const response = await fetch('http://localhost:3000/notes', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

module.exports = NotesClient;
