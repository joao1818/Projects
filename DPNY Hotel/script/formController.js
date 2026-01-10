
exports.formPage = (req, res)=>{
    res.render('formp');
}

exports.formMessage = (req, res)=>{
    res.send(req.body.password)
}