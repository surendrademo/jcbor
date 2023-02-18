import UserModal from "../modals/index.js"

export const getUsers = async (req, res) => {
    UserModal.find().then((allUsers) => {
        res.status(200).json(allUsers)
    }).catch((err) => res.status(404).json({ message: err }))
}

export const setUser = async (req, res) => {
    const { name, phone, email } = req.body;
    try {
        if (!name || !email || !phone) {
            return res.status(422).json({
                status: 422,
                success: false,
                error: 'All fileds are required'
            })
        }
        UserModal.findOne({ phone: phone }).then((userExist) => {
            if (userExist) {
                return res.status(422).json({
                    status: 422,
                    success: false,
                    error: 'User Already exist'
                });
            }
            const user = new UserModal({ name, email, phone })
            user.save().then(() => {
                res.status(200).json({
                    success: true,
                    status: 200,
                    message: 'Post created'
                })
            }).catch((err) => {
                res.status(500).json({
                    status: 500,
                    success: false,
                    error: 'failed to creating post'
                })
            })
        }).catch(err => { console.log(err) })
    }
    catch (error) {
        console.log("error in server in create posts")
        res.status(410).json({ message: error.message })
    }
}