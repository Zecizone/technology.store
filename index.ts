require('dotenv').config();

import express, { Express } from "express";
import path from 'path';
import { Connection } from "mysql2/promise";
import { initDataBase } from "./Server/services/db";
import { initServer } from "./Server/services/server";
import ShopAPI from "./Shop.API";
import ShopAdmin from "./Shop.Admin";

export let server: Express;
export let connection: Connection;

async function launchApplication() {
  server = initServer();
  connection = await initDataBase();

  initRouter();
}

function initRouter() {
  const shopApi = ShopAPI(connection);
  server.use("/api", shopApi);

  const shopAdmin = ShopAdmin();
  server.use("/admin", shopAdmin);

  server.use(express.static(path.join(__dirname, 'Shop.Client/dist')));

  server.use('/', (_, res) => {
    res.sendFile(path.join(__dirname, '../Shop.Client/dist', 'index.html'));
  });
  
}

launchApplication();
