import ApiService from "../utils/apiServices";

const client = new ApiService();

export function getBridge() {
  return client.get("/jembatan");
}

export function searchBridgeByName(setSearch) {
  return client.get("/jembatan/search", { setSearch });
}
