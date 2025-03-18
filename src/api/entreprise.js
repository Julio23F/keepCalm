import { jsonQuery } from "./common";

export async function apiCreateEntreprise(data) {
  return await jsonQuery("entreprises/", "POST", data, true, false);
}
