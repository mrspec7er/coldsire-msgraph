import { _deviceCodeCredential, _settings, _userClient } from "../../config";

export async function createDomain(domain: string) {
  if (!_userClient) {
    throw new Error("Graph has not been initialized for user auth");
  }

  await _userClient.api(`domains`).post({ id: domain });
}

export async function getAllDomains() {
  if (!_userClient) {
    throw new Error("Graph has not been initialized for user auth");
  }

  return await _userClient.api(`domains`).get();
}
