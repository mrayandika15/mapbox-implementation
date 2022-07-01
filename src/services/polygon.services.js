import ApiService from "../utils/apiServices";

const client = new ApiService();

export function getKelurahan() {
  return client.get("/kelurahan");
}

export function getKecamatan() {
  return client.get("/list-kecamatan");
}

export function getRuasJalan() {
  return client.get("/ruas-jalan");
}

export function searchRuasJalan(setSimiliar) {
  return client.get("/ruas-jalan/search", { setSimiliar });
}
