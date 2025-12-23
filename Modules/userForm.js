function userForm(req, resp) {
    resp.write(`
        <form action="/submit" method="post">
      <input type="text" placeholder="Enter Your Name" name="name" />
      <input type="email" placeholder="Enter Your Email" name="email" />
      <button>Submit</button>
    </form>
        `);
        resp.end();
}
module.exports = userForm;