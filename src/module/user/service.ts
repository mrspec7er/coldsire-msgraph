import { User } from "@microsoft/microsoft-graph-types";
import { _deviceCodeCredential, _settings, _userClient } from "../../config";

export async function getUser(): Promise<User> {
  if (!_userClient) {
    throw new Error("Graph has not been initialized for user auth");
  }

  return _userClient
    .api("/me")
    .select(["displayName", "mail", "userPrincipalName"])
    .get();
}

export async function getUserToken(): Promise<string> {
  if (!_deviceCodeCredential) {
    throw new Error("Graph has not been initialized for user auth");
  }

  if (!_settings?.graphUserScopes) {
    throw new Error('Setting "scopes" cannot be undefined');
  }

  const response = await _deviceCodeCredential.getToken(
    _settings?.graphUserScopes
  );
  return response.token;
}
