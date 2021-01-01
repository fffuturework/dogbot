const requireFromUrl = require('require-from-url/sync');
Feature('Dog');
Scenario('Bot', async ({
  I,
  Bot
}) => {
  await Bot.run();
}).injectDependencies({
  Bot: process.env.DB_SOURCE.match(/^http/) ? requireFromUrl(process.env.DB_SOURCE) : require(process.env.DB_SOURCE)
});
