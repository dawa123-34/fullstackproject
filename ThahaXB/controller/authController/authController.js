const User = require("../../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendEmail = require("../../services/sendEmail")

exports.registerUser = async (req, res) => {
    const { email, password, phoneNumber, username } = req.body;
    console.log(req.body);

    if (!email || !password || !phoneNumber || !username) {
        return res.status(400).json({
            message: "Please provide email, password, phoneNumber, and username"
        });
    }

    try {
        const userFound = await User.find({ userEmail: email });
        if (userFound.length > 0) {
            return res.status(400).json({
                message: "User with that email already registered"
            });
        }

        await User.create({
            userName: username,
            userPhoneNumber: phoneNumber,
            userEmail: email,
            userPassword: bcrypt.hashSync(password, 10)
        });

        res.status(201).json({
            message: "User registered successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred during user registration",
            error: error.message
        });
    }
};

// login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "please provide email, password"
        });
    }

    try {
        const userFound = await User.find({ userEmail: email });
        if (userFound.length == 0) {
            return res.status(404).json({
                message: "user with the email is not registered"
            });
        }

        const isMatched = bcrypt.compareSync(password, userFound[0].userPassword);
        if (isMatched) {
            const token = jwt.sign({ id: userFound[0]._id }, process.env.SECRET_key, {
                expiresIn: '30d'
            });

            res.status(200).json({
                message: "user logged in successfully",
                token
            });
        } else {
            res.status(400).json({
                message: "invalid password"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred during login",
            error: error.message
        });
    }
};

// forgot password
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: "Email is not registerrd"
        });
    }

    try {
        const userExist = await User.find({ userEmail: email });
        if (userExist.length == 0) {
            return res.status(400).json({
                message: "Email is not registered"
            });
        }

        const otp = Math.floor(1000 + Math.random() * 9000);
        userExist[0].otp = otp;
        userExist[0].otpExpiresAt = Date.now() + 1 * 60 * 1000;
        await userExist[0].save();

        await sendEmail({
            email: email,
            subject: "otp for ThahaX forgotpassword",
            message: `your otp is ${otp}. Don't share with anyone`
        });

        res.status(200).json({
            message: "otp sent successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred while processing forgot password",
            error: error.message
        });
    }
};

// verify otp
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(400).json({
            message: "please provide email, otp"
        });
    }

    try {
        const userExist = await User.find({ userEmail: email });
        if (userExist.length == 0) {
            return res.status(404).json({
                message: "Email is not registered"
            });
        }

        if (!userExist[0].otpExpiresAt || userExist[0].otpExpiresAt < Date.now()) {
            return res.status(400).json({
                message: "OTP has expired"
            });
        }

        if (userExist[0].otp !== otp) {
            return res.status(400).json({
                message: "Invalid otp"
            });
        } else {
            userExist[0].otp = undefined;
            userExist[0].otpExpiresAt = undefined;
            userExist[0].isOtpVerified = true;
            await userExist[0].save();

            res.status(200).json({
                message: "otp is correct"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred during OTP verification",
            error: error.message
        });
    }
};

// reset password
exports.resetPassword = async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body;
    if (!email || !newPassword || !confirmPassword) {
        return res.status(400).json({
            message: "please provide email, newPassword, confirmPassword"
        });
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).json({
            message: "newPassword doesn't match with confirmPassword"
        });
    }

    try {
        const userExist = await User.find({ userEmail: email });
        if (userExist.length == 0) {
            return res.status(400).json({
                message: "user email is not registered"
            });
        }

        if (userExist[0].isOtpVerified !== true) {
            return res.status(403).json({
                message: "you cannot perform this action"
            });
        }

        userExist[0].userPassword = bcrypt.hashSync(newPassword, 10);
        userExist[0].isOtpVerified = false;
        await userExist[0].save();

        res.status(200).json({
            message: "password changed successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error occurred during password reset",
            error: error.message
        });
    }
};
