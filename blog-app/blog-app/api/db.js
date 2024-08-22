import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"MAKUENIkenya2020",
  // password: process.env.DB_KEY,
  database:"blogging"
})