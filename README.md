# dogbot
CodeceptJS based bot

# setup
you need to run  [chromedriver](https://chromedriver.chromium.org/downloads)  beforehand


# install
```bash
$ git clone https://github.com/freddiefujiwara/dogbot
$ cd dogbot
$ npm i
```
# usage
## with Chrome UA
```bash
$ DB_SOURCE=[YOUR PAGEOBJECT URL] HEADLESS=true npx codeceptjs run --verbose
```
## with iPhone UA
```bash
$ DB_SOURCE=[YOUR PAGEOBJECT URL] HEADLESS=true npx codeceptjs run --profile iphone --verbose
```

# Example of displaying trending keywords on Twitter in standard output
[DB_SOURCE](https://gist.githubusercontent.com/fffuturework/dd8a412b5f0d96b7f8fcb5e7e1715f9b/raw/104d5128b80889c992d45ce3f6704a6fbd2a8afd/dogbot-example-twitter-trend.js)
```bash
$ DB_SOURCE='https://gist.githubusercontent.com/fffuturework/dd8a412b5f0d96b7f8fcb5e7e1715f9b/raw/104d5128b80889c992d45ce3f6704a6fbd2a8afd/dogbot-example-twitter-trend.js' HEADLESS=true npx codeceptjs run --verbose
CodeceptJS v3.0.4

Using test root "/home/user/dogbot"

Helpers: WebDriver
Plugins: screenshotOnFail, retryFailedStep, tryTo
Dog -- 
    [1]  Starting recording promises
  Bot
    I am on page "https://twitter.com/explore/tabs/trending"
    I grab text from all {xpath: .//main//section//div[./@dir = 'ltr']/span}
    › [SmartWait (60000ms)] Locating {xpath: .//main//section//div[./@dir = 'ltr']/span} in 60000
    › [GrabText] SASUKE,#NJU歌謡祭,ひーくん,#昭和生まれっぽい発言をしろ,#岩本照,#D4DJラブハグ無料ライブ,#ゆくマスくるマス2020,塚ちゃん,岩本くん,きんちゃん,ひかるくん,マッチョマン,りんねくん,日置さん,琳寧くん,山
田勝己,岩本さん,キョロちゃん,長野さん
   SASUKE
   #NJU歌謡祭
   ひーくん
   #昭和生まれっぽい発言をしろ
   #岩本照
   #D4DJラブハグ無料ライブ
   #ゆくマスくるマス2020
   塚ちゃん
   岩本くん
   きんちゃん
   ひかるくん
   マッチョマン
   りんねくん
   日置さん
   琳寧くん
   山田勝己
   岩本さん
   キョロちゃん
   長野
  OK  | 1 passed   // 7s
```
