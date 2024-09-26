// const router=require("express").Router();
// const User=require("../models/user");
// //Sign in
// router.post("/register",async(req,res)=>
// {
//     try {
//         const {email,username,password}=req.body;
//         const user=new User({email,username,password});
//         await user.save().then(()=>
//             res.status(200).json({user : user})
//         );
//     } catch (error) {
//         res.status(400).json({
//             message:"User already exists"
//         });
        
//     }

// });
const router = require("express").Router();
const User = require("../models/user");
const bcrypt=require("bcryptjs");
// Sign up
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        //hashing passwords
        const hashPassCode=bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashPassCode });
        
        await user.save().then(()=>
        
        
        res.status(200).json({ user: user })
);
    } catch (error) {
        res.status(400).json({
            message: "User already exists"
        });  
    }
});

//sign in


router.post("/signin", async (req, res) => {
    try {
        const user=await User.findOne({email: req.body.email});
        if(!user){
            res.status(400).json({message: "Please signup"});
        }
        const ispasswordCorrect = bcrypt.compareSync(req.body.password,user.password);
        if(!ispasswordCorrect){
            res.status(400).json({message: "Password Incorrect"});
        }
        const {password, ...others}=user._doc;
        res.status(200).json({others});
    } catch (error) {
        res.status(400).json({
            message: "User already exists"
        });  
    }
});

module.exports = router; // Make sure to export the router