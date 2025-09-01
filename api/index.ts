import type { Request, Response } from "express";

const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Here is some sample API data',
        items: ['apple', 'banana', 'cherry'],
        randomNumber: Math.floor(Math.random() * 100)
    });
});


app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));

module.exports = app;