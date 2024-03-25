"use client";
import { Client, Databases } from "appwrite";

export function useAppWrite() {
  const client = new Client();
  client
    .setEndpoint(`${process.env.APP_WRITE_ENV}`)
    .setProject(`${process.env.CLIENT_ID}`);

  const databases = new Databases(client);
  return { client, databases };
}
