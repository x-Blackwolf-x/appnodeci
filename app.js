const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: '¡Hola Mundo!'
    })
})

app.listen(port, () => {
    console.log(`Server escuchando en http://localhost:${port}`);
})