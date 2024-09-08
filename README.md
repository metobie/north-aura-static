# Overland Soul

## Projektinformation

**Projekt**: dreamy-video-signup

**URL**: https://run.gptengineer.app/projects/1d7d4776-3276-4226-b337-742d3343c98f/improve

## Hur kör jag detta projekt lokalt?

För att köra och utveckla detta projekt lokalt, följ dessa steg:

1. Klona repositoryt:
   ```
   git clone <DITT_REPO_URL>
   ```

2. Navigera till projektmappen:
   ```
   cd dreamy-video-signup
   ```

3. Installera beroenden:
   ```
   npm install
   ```

4. Starta utvecklingsservern för frontend:
   ```
   npm run dev
   ```

5. Öppna din webbläsare och gå till `http://localhost:5173` (eller den port som Vite anger).

6. För att köra backend-servern, skapa en ny fil `server.js` i projektets rot och lägg till följande kod:

   ```javascript
   const express = require('express');
   const cors = require('cors');
   const bodyParser = require('body-parser');
   const nodemailer = require('nodemailer');

   const app = express();
   app.use(cors());
   app.use(bodyParser.json());

   const registeredEmails = [];

   const transporter = nodemailer.createTransport({
     host: 'smtp.example.com',
     port: 587,
     auth: {
       user: 'your_email@example.com',
       pass: 'your_password'
     }
   });

   app.post('/api/register', (req, res) => {
     const { email } = req.body;
     if (email && !registeredEmails.includes(email)) {
       registeredEmails.push(email);
       
       // Skicka bekräftelsemail
       const mailOptions = {
         from: 'your_email@example.com',
         to: email,
         subject: 'Tack för din registrering hos Overland Soul',
         text: 'Tack för att du registrerade dig för vårt nyhetsbrev. Vi ser fram emot att dela våra äventyr med dig!'
       };
       
       transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
           console.log('Error:', error);
         } else {
           console.log('Email sent:', info.response);
         }
       });
       
       res.status(200).json({ message: 'Registrering lyckades' });
     } else {
       res.status(400).json({ message: 'Ogiltig e-postadress eller redan registrerad' });
     }
   });

   const PORT = 3001;
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

7. Installera nödvändiga paket för backend:
   ```
   npm install express cors body-parser nodemailer
   ```

8. Starta backend-servern:
   ```
   node server.js
   ```

Nu kör du både frontend och backend lokalt. Frontend-appen kommer att kommunicera med backend-servern för att hantera e-postregistreringar.

Observera att du behöver konfigurera en giltig SMTP-server för att skicka e-postmeddelanden. I produktionsmiljö bör du använda en säker e-posttjänst och lagra känslig information som lösenord i miljövariabler.

## Teknologier som används i detta projekt

Detta projekt är byggt med:

- Vite
- React
- shadcn-ui
- Tailwind CSS
- Express (för backend)
- Nodemailer (för e-posthantering)

## Hur kan jag distribuera detta projekt?

För att distribuera detta projekt behöver du:

1. Sätta upp en produktionsserver för din backend (t.ex. på Heroku, DigitalOcean, eller AWS).
2. Konfigurera miljövariabler för känslig information som SMTP-inställningar.
3. Bygga din frontend-app med `npm run build`.
4. Distribuera frontend-bygget till en statisk webbhosting-tjänst (t.ex. Netlify, Vercel, eller GitHub Pages).
5. Uppdatera API-anropet i frontend-koden till att peka på din produktions-backend-URL.

För mer detaljerade instruktioner om distribution, se dokumentationen för de specifika tjänster du väljer att använda.

## Kan jag använda en anpassad domän?

Ja, du kan använda en anpassad domän för ditt projekt. De flesta hosting-tjänster erbjuder möjligheten att konfigurera anpassade domäner. Se dokumentationen för din valda hosting-tjänst för specifika instruktioner.

## Hur kan jag redigera denna kod?

Det finns flera sätt att redigera din applikation:

1. **Använd din föredragna IDE**
   Klona detta repo och push:a ändringar. 

2. **Redigera en fil direkt på GitHub**
   Navigera till önskad fil, klicka på "Redigera" (pennikon) och gör dina ändringar.

3. **Använd GitHub Codespaces**
   Starta en ny Codespace-miljö direkt från GitHub-repositoryt.

Kom ihåg att testa dina ändringar lokalt innan du distribuerar dem till produktion.