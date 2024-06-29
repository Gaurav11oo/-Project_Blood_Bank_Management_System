const testController = (req, res) => {
    res.status(200).send({
        message:"WELCOME USER",
        success: true,

    });
}

module.exports = { testController};



