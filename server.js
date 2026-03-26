const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve your custom frontend files
app.use(express.static(path.join(__dirname, 'public')));

// --- ADD THIS: Serve Adyen SDK directly from node_modules ---
app.use('/adyen', express.static(path.join(__dirname, 'node_modules/@adyen/adyen-web/dist')));

app.post('/api/sessions', async (req, res) => {
    // ... (Your existing sessions logic)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));