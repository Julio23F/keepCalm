import { jsonQuery, query } from "./common";

export async function apiCreateMember(data) {
  return await jsonQuery("members/", "POST", data, true);
}

export async function apiGetMembers(searchParams) {
  return await query(
    "members/",
    { searchParams },
    true
  );
}
