import axios from "axios";

export async function postNewTask(url: string, data: any) {
  let options = {
    method: "POST",
    url: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };
  try {
    let response = await axios(options);
    return response;
  } catch (e: any) {
    return e.response.status;
  }
}

export async function putTask(url: string, data: any) {
  let options = {
    method: "PUT",
    url: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };
  try {
    let response = await axios(options);
    return response;
  } catch (e: any) {
    return e.response.status;
  }
}

export async function deleteItem(url: string) {
  let options = {
    method: "DELETE",
    url: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (e: any) {
    return e.response.status;
  }
}
