
# Infinite Scrolling Project

## 🖥️ Live Link

[Visit Live Application](https://rohanh007.github.io/Infinite-Scrolling/)


## 📖 About Infinite Scrolling

Infinite scrolling is a web design pattern used to load content continuously as the user scrolls down the page, eliminating the need for pagination. It enhances user experience by allowing them to explore more content seamlessly.

Infinite scrolling is widely used in social media platforms (e.g., Instagram, Facebook, Twitter) and e-commerce websites. When the user reaches the bottom of the page, more content is dynamically loaded without requiring a page refresh.

### Key Benefits of Infinite Scrolling:

**1. Improved User Experience:** Continuous content loading keeps users engaged.<br>
**2. No Page Navigation:** Removes the need for clicking "Next" or "Previous" buttons.<br>
**3. Dynamic Content Loading:** Only the required data is fetched, saving bandwidth.

## 🛠️ How Infinite Scrolling Works

### Core Logic 

The infinite scrolling mechanism can be implemented by listening to the scroll event of the browser window and calculating whether the user has scrolled to the bottom (or close to the bottom) of the page.

**Here's the formula:**
```javascript
window.scrollY + window.innerHeight >= document.body.scrollHeight - 100

```
## Explanation of the Formula

 ### 1. window.scrollY:
This represents the number of pixels the user has scrolled vertically from the top of the page.
It is a read-only property that dynamically updates as the user scrolls.

### 2. window.innerHeight:
This is the height of the browser's visible area (viewport).
It represents the height, in pixels, of the area in which content is displayed.

### 3. document.body.scrollHeight:
This is the total height of the document, including the content that is not visible on the screen due to scrolling.
- 100 (Buffer Distance):

This ensures that the new content loads slightly before the user reaches the absolute bottom of the page.
It improves the user experience by reducing any perceived delay.

## Putting It Together:
The condition checks if the sum of the scrolled distance (window.scrollY) and the visible area height (window.innerHeight) is greater than or equal to the total height of the page (document.body.scrollHeight), minus a buffer of 100 pixels.

