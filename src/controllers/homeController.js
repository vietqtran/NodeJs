import { json } from "body-parser";
import pool from "../configs/connectDB";


let getHomePage = async (req, res) => {
      const [rows, fields] = await pool.execute('SELECT * FROM users');
      console.log(rows);
      return res.render('index.ejs', { dataUser: rows, test: 'abcxyz' })
}

let getDetailsPage = async (req, res) => {
      let userId = req.params.userId
      console.log(req.params);
      let [user] = await pool.execute(`select * from users where id = ?`, [userId])
      console.log(user);
      return res.render('detailsUser.ejs', { details: user })
}


//thêm người dùng vào database
let createNewUser = async (req, res) => {
      console.log('check request', req.body);
      let { firstName, lastName, email, address } = req.body
      await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)', [firstName, lastName, email, address])
      return res.redirect('/')
}

let deleteUser = async (req, res) => {
      let userId = req.body.userId
      await pool.execute('delete from users where id = ?', [userId])
      return res.redirect('/')
}

let editUser = async (req, res) => {
      let id = req.params.userId
      let [user] = await pool.execute('select * from users where id = ?', [id])
      return res.render('updateUser.ejs', { user: user[0] })
}

let updateUser = async (req, res) => {
      let { firstName, lastName, email, address, id } = req.body
      await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id])
      return res.redirect('/')
}

let getUpLoadFilePage = async (req, res) => {
      return res.render('uploadFile.ejs')
}

module.exports = {
      getHomePage, getDetailsPage, createNewUser, deleteUser, editUser, updateUser, getUpLoadFilePage
}