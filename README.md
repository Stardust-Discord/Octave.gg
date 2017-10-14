# Gnar-Web
Web front-end for [Gnar](https://github.com/Gnar-Team/Gnar-bot), available at [gnarbot.xyz](https://gnarbot.xyz)

### Running
- **Step 1:** Clone the repository using your Git client.
    - Run the Git command `git clone git@github.com:Gnar-Team/Gnar-www.git`
- **Step 2:** Install Node Dependencies
    - Run the command `npm install`
- **Step 3:** Configure credentials
    - Rename the file `credentials.example.js` to `credentials.js`
    - Edit credentials with correct information, you can create a Discord application [here](https://discordapp.com/developers/applications/me)
    - Redirect URI should be set to `http://your.website/dashboard/callback` (replace your.website with proper domain)
- **Step 4:** Start webserver
    - Run the command `npm run start`