const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const newusersRouter = require('./routes/newusers');

const servicesRouter = require('./routes/services');

const sampleprojectsRouter = require('./routes/projects');

const manageprofileRouter = require('./routes/profilemanagement');

const assignprojectRouter = require('./routes/assignproject');
const userRouter = require('./routes/API/user');
const authRouter = require('./routes/API/auth');

app.use('/newusers', newusersRouter);

app.use('/services', servicesRouter);

app.use('/projects', sampleprojectsRouter);

app.use('/profilemanagement', manageprofileRouter);

app.use('/assignproject', assignprojectRouter);
app.use('/API/auth', authRouter);
app.use('/API/user', userRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});






