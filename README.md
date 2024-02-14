# Ioconic - Movie Quotes

## Context

This is a MVP solution for a ‘movie quotes’ app. In this version, users are able to enter a quote and see it in an ordered list, items in the list can be dragged and dropped to change the rankings.

## Tech choices

### State management

For state management the two most obvious options were Redux and Zustand. As this is a very lightweight project meant to be completed in a limited amount of time, Zustand felt like a more appropriate approach. I decided to use `AsyncStorage` with Zustand as it is perfect to store small unencrypted amounts of data directly on the device (which allows users to close the app and still have their list available when they re-open it).

**Zustand pros & cons:**

| pros | cons |
| --- | --- |
| Very usable ‘out of the box’ - little to no setting up required | Less online resources than Redux (but still a lot) |
| Very lightweight | Can’t handle complex tasks as well as Redux (not an issue for this MVP) |

### UI

As I wanted to develop this as fast as possible I considered using third party UI libraries, but ended up going with simple inline styles to save time on picking a library and editing the styled components. I believe using a UI library could be useful in the future if we wanted to build out the app’s features.

## Limitations

Developing an MVP I obviously had to make tradeoffs:

- UI - I had to keep the UI very simple, one of the biggest issues I see with it currently is that it isn’t obvious items in the list can be re-arranged. I also didn’t take into account accessibility concerns
- Expo version - Using the latest version of Expo (50) caused an error `'main' has not been registered` , from my research I believe this is due to some version mismatch between the expo version and the `DraggableFlatList` library I used. The easiest fix I could find was to downgrade to expo 49. Ideally the app should be upgraded to expo 50 when the libraries are compatible
- Functionality - As this is an MVP, the functionality of the app is very limited. My approach to this was to make the existing code as compartmentalised as possible so that more features can be added easily without the need for massive refactors or reworks.

## Feature ideas

With more time spent on the application, here are some features that would be interesting to add:

- Authentication and separation of users - Adding authentication into the app, using OAuth for example, would allow for a user system to be created. This could involve saving user details and their saved quotes in a database, and letting users find each other on the app to check other people’s favourite quotes.
- Quote details - Something I wanted to implement in this version but did not have time to do, was the ability to provide more details of a quote. For example when adding a quote, a modal would open with other fields to fill in such as the movie title, the character saying the quote etc.
- Ratings - When going into a quote’s details, a star system could be implemented for other users to rate quotes, this could then be used to rank quotes on a global scale. Users could then access a ‘global’ tab and see all the ranked quotes.