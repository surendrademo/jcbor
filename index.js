import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes/index.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://SURENDRA:Rohit45@usercluster.drezi9s.mongodb.net/user?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected…')
}).catch(err => console.log(err))

app.use('/', routes)
app.use('/', routes)

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})
