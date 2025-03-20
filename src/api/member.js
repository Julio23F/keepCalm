import { jsonQuery } from "./common";

export async function apiCreateMember(data) {
  return await jsonQuery("members/", "POST", data, true, false);
}
