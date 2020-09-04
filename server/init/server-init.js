import router from '../routers';
import viewHandle from '../controller/app';

export default function serverInit(app) {
    const PORT = process.env.PORT || 3000;

    app.use('/app', viewHandle);
    app.use('/api/quote', router);
    app.use('/api/user', router);
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}
