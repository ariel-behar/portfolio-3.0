import express, { Application } from 'express';

import routes from './routes/routes.js';

const PORT = process.env.PORT || '3030';

const app: Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
})