import { readdir } from 'fs/promises';

exports.handler = async (event, context, callback) => {
  response = [];

  try {
    const files = await readdir("../src/");
    for await (const file of files)
      response.push(file);
  } catch (err) {
    response.push(file);
  }

  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!' + JSON.stringify(response)
  })
}
