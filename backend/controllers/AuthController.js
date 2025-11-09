const AuthLogin = async (req, res) => {
    res.render('login');
}

const AuthLogout = async (req, res) => {
    //handle with passport
    res.send('logging out');
}

const SignUpWithGoogle = async (req, res) => {
    //handle with passport
    res.send('logginf in with google');
}

module.exports = { AuthLogin, SignUpWithGoogle, AuthLogout }