import { _deviceCodeCredential, _settings, _userClient } from "../../config";
import { PageCollection } from "@microsoft/microsoft-graph-client";
import { Message } from "@microsoft/microsoft-graph-types";

export async function getInboxMail(): Promise<PageCollection> {
  if (!_userClient) {
    throw new Error("Graph has not been initialized for user auth");
  }

  return _userClient
    .api("/me/mailFolders/inbox/messages")
    .select(["from", "isRead", "receivedDateTime", "subject"])
    .top(25)
    .orderby("receivedDateTime DESC")
    .get();
}

export async function sendMail(
  subject: string,
  body: string,
  recipient: string
) {
  if (!_userClient) {
    throw new Error("Graph has not been initialized for user auth");
  }
  const message: Message = {
    subject: subject,
    body: {
      content: body,
      contentType: "text",
    },
    toRecipients: [
      {
        emailAddress: {
          address: recipient,
        },
      },
    ],
  };

  return _userClient.api("me/sendMail").post({
    message: message,
  });
}
