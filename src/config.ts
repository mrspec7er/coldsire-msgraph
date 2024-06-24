import "isomorphic-fetch";
import {
  DeviceCodeCredential,
  DeviceCodePromptCallback,
} from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { User } from "@microsoft/microsoft-graph-types";
import { DeviceCodeInfo } from "@azure/identity";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

const msGraphConfig: MsGraphConfig = {
  clientId: "b3708121-5a77-4b0e-9c73-395297882115",
  tenantId: "common",
  graphUserScopes: [
    "user.read",
    "mail.read",
    "mail.send",
    "User.ReadWrite.All",
    "Domain.ReadWrite.All",
    "Contacts.ReadWrite",
  ],
};

let _settings: MsGraphConfig | undefined = undefined;
let _deviceCodeCredential: DeviceCodeCredential | undefined = undefined;
let _userClient: Client | undefined = undefined;

export interface MsGraphConfig {
  clientId: string;
  tenantId: string;
  graphUserScopes: string[];
}

export function initializeGraphForUserAuth(
  settings: MsGraphConfig,
  deviceCodePrompt: DeviceCodePromptCallback
) {
  // Ensure settings isn't null
  if (!settings) {
    throw new Error("Settings cannot be undefined");
  }

  _settings = settings;

  _deviceCodeCredential = new DeviceCodeCredential({
    clientId: settings.clientId,
    tenantId: settings.tenantId,
    userPromptCallback: deviceCodePrompt,
  });

  const authProvider = new TokenCredentialAuthenticationProvider(
    _deviceCodeCredential,
    {
      scopes: settings.graphUserScopes,
    }
  );

  _userClient = Client.initWithMiddleware({
    authProvider: authProvider,
  });
}

function initializeGraph(settings: MsGraphConfig) {
  initializeGraphForUserAuth(settings, (info: DeviceCodeInfo) => {
    console.log(info.message);
  });
}

async function greetUserAsync() {
  try {
    const user = await getCurrentUser();
    console.log(`Hello, ${user?.displayName}!`);
    console.log(`Email: ${user?.mail ?? user?.userPrincipalName ?? ""}`);
  } catch (err) {
    console.log(`Error getting user: ${err}`);
  }
}

export async function getCurrentUser(): Promise<User> {
  if (!_userClient) {
    throw new Error("Graph has not been initialized for user auth");
  }

  return _userClient
    .api("/me")
    .select(["displayName", "mail", "userPrincipalName"])
    .get();
}

export {
  initializeGraph,
  msGraphConfig,
  greetUserAsync,
  _settings,
  _deviceCodeCredential,
  _userClient,
};
