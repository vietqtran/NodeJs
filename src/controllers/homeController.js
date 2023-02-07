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

module.exports = {
      getHomePage, getDetailsPage
}