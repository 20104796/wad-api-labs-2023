import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// 自定义密码验证器的正则表达式
const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (password) => passwordValidator.test(password),
            message: 'Password must be at least 8 characters long and contain at least one letter, one digit, and one special character.'
        }
    }
});

export default mongoose.model('User', UserSchema);
