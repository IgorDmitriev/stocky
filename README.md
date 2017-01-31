# Stocky

## Background
  Stocky is a mobile application in which users can trade/sell stock
at real-world prices with fake money. It is a fun game, that can also
give users a safe way to experiment in trading stock.

## Minimum Viable Product
The mechanics of the game will be the following:
- [ ] Auth with phone / email / facebook
- [ ] Users start with a sum of money ($100,000)
- [ ] Stock can be bought/sold
- [ ] The prices of stock will reflect the actual real-world value
- [ ] User index page - display all stocks which user have bought and balance.
- [ ] Leaderboard - display the best players.
BONUS
- [ ] Users might setup push notifications if price of any stock changed by X
- [ ] Achievements
- [ ] Custom Stocks (followers of twitter account of some public person etc)

## Wireframes
![ ](./docs/wireframes/wireframe.png)

## Technologies
Stocky will be a mobile application. The back end will be built with
Ruby on Rails. The front end will use JavaScript and React Native. Google
Finance API will be used to request the real-world stock prices.

## Group Members
Our group consist of three members: Dan (Dong) Kim, Igor Dmitriev, and Joe Thomas.

The main goal for us is to get an experience working with new technologies,
so we split the work to get and share experience in each field:
ReactNative with Rails backend, 3rd party Auth, Set up Workers,
Graph and Custom design in ReactNative.

## Implementation Timeline
**Day 1:** Backend setup and Front End User Auth
1h: Team meeting: Discuss backend architecture, wireframes and work breakdown.
30m: Setup Rails and ReactNative apps.
2h: Fb Auth
2h: Setup backend for Stocks, Companies and Transactions

**Day 2:** Stocks / Companies logic, User index/home page
30m: Team meeting: Exchange experience from previous day. Set goals for current day.
30m: Add logic to update Stock price for company after initialize
30m: Seed DB
1h: Reorganize mobile app to have Android and iOS version synced and add Redux
1h: Build skeleton for User index page
1h: Research and implement basic List and ListItem components. Basic variation. Should fetch info from backend.
2h: Research and implement Graph and Segment control components.

**Day 3:** Buy, Sell, Company Details
30m: Team meeting: Exchange experience from previous day. Set goals for current day.
1h: Research and implement Navigator.
1h: Build skeleton for Company details page
1h: Add CompanyDetails List component with
1h: Add Buy / Sell buttons and make it by default buy / sell 1 share.
2h: Test and debug: Auth, Index page, Company Details, Buy / Sell buttons.


**Day 4:** History, Search, TabBar
30m: Team meeting: Exchange experience from previous day. Set goals for current day.
1h: Transactions History List Component and switch to see it on index page.
1h: TabBar with 2 buttons so far: Home / Search
1h: Search Component
1h: Search Result List
1h: Buy/Sell picker

**Day 5:** Style and Polish
30m: Team meeting: Exchange experience from previous day. Set goals for current day.
2h: Style components
2h: Test and Debug whole user flow
2h: Add animations
