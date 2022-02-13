export const register = {
    title:'Sign up for a Samgreen profile',
    description:'The account created here will be linked to your product.',
    labelNickname: 'Profile username',
    labelPlaceholderNickname: 'your profile username',
    labelEmail: 'Email',
    labelPlaceholderEmail: 'your email',
    labelPassword: 'Password',
    button:'Create account',
    errors:{
        nickname:{
            one:'* The Nickname is required'
        },
        email:{
            one:'* The Email is required',
            two:'* The Email is invalid'
        },
        password:{
            one:'* The password is required '
        }
    }
}