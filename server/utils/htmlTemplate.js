function htmlTemplate({ name, email, phone, service, message }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        table {
          border: 5px solid darkgreen;
          border-collapse: collapse;
          width: 70%;
          font-size: 20px;
        }
  
        th {
          font-weight: bold;
          text-align: start;
          padding: 10px;
        }
        td {
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <h1>New Submission from Miller Violin Site!</h1>
      <table>
        <tr>
          <th>Name</th>
          <td>${name}</td>
        </tr>
        <tr style="background-color: lightgreen">
          <th>Email</th>
          <td>${email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${phone}</td>
        </tr>
        <tr style="background-color: lightgreen">
          <th>Service</th>
          <td>${service}</td>
        </tr>
        <tr>
          <th>Message</th>
          <td>${message}</td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

module.exports = htmlTemplate;
