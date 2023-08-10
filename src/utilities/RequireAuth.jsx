import { redirect } from "react-router-dom";

export default async function requireAuth() {
  const isLogged = false;

  if (!isLogged) {
    const response = redirect("/login?message=You must log in first");
    response.body = true;
    return response;
  }
  return null;
}
