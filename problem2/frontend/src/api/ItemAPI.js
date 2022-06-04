import AxiosClient from "./ApiClient";

export const getItem = async (name) => {
  const response = await AxiosClient.get("/item", {
    params: {
      name: name,
    }
  });
  
  if (response.status === 200) {
    return response.data;
  }
}

export const createItem = async (name, quantity, description) => {
  const response = await AxiosClient.post("/item", {
    name: name,
    quantity: quantity,
    description: description,
  });

  if (response.status === 200) {
    return response.data;
  }
}

export const updateItem = async (id, name, quantity, description) => {
  const response = await AxiosClient.put("/item/update", {
    id: id,
    name: name,
    quantity: quantity,
    description: description,
  });

  if (response.status === 200) {
    return response.data;
  }
}

export const deleteItem = async (id) => {
  const response = await AxiosClient.put("/item/delete", {
    id: id,
  });

  if (response.status === 200) {
    return response.data;
  }
}
