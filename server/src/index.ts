import { app } from './server';
const port = process.env.LISTEN_PORT || 8081;
app.listen(port, () => console.log(`Server listening on port ${port}`));
