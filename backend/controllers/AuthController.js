const AuthLogin = (req, res) => {
    res.render('login');
}

const AuthLogout = (req, res) => {
    //handle with passport
    res.send('logging out');
}


const GoogleCallBack = (req, res) => {
    console.log("Callback reached...")
    //res.redirect("http://localhost:5173/"); 
    res.send('You have reached the voicemail lite service of...');
}

module.exports = { AuthLogin, AuthLogout, GoogleCallBack }