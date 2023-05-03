import {config} from 'dotenv'
config();

console.log (process.env.Hello)

export default {
    port: 4000
}