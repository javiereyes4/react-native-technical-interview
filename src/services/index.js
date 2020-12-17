var host = "http://localhost:3000";

async function postService(body, path) {
  const request = await fetch(`${host}/${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = {};

  try {
    data = await request.json();
  } catch (error) {
    console.log(error);
  }

  return data;
}

async function getService(path) {
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const request = await fetch(`${host}/${path}`, {
    method: "GET",
    headers,
  });

  let data = {};

  try {
    data = await request.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}

const services = {
  postLogin: (body) => postService(body, "sing_in"),
  getBooks: () => getService("books"),
};

export { postService, getService, services };
