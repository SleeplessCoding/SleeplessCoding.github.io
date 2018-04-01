# DejaBrewTrades Website Project

This is the project repository for the DejaBrewTrades website. This website will become the landing platform for all BrewCrew members as well as any crypto enthusiasts.  

[DejaBrewTrades - Twitch](www.twitch.com/dejabrewtrades)

## Task List

### Project Task Outline

| #  | Task Name | Status |
|:----:|:-----------------------| :-------:|
| 1. | Frame HTML base content | Working...|
| 2. | Setup flex containers | Unfinished|
| 3. | CSS core elements (font-family, etc) | Unfinished|
| 4. | Add titles, images, and paragraph content | Unfinished|
| 5. | Adjust content placement | Unfinished|
| 6. | Stylize with colors and CSS effects | Unfinished|
| 7. | Add javascript components | Unfinished|
| 8. | Set up pages for responsiveness (@media) | Unfinished|
| 9. | UI/UX testing | Unfinished|

## Website Details

### Color Scheme

| Color 1 | Color 2 | Color 3 | Color 4 | Color 5 |
|:-------:|:-------:|:-------:|:-------:|:-------:|
| Main 1 Dgreen | Main 2 DBlue | Accent 1 LGreen| Accent 2 LBlue| Background = white |

### Pages

| #  | Page Name | Status |
|:----:|:-----------------------| :-------:|
| 1. | Index (Home) |Unfinished |
| 2. | Memebership + Payment | Unfinished|
| 3. | Course | Unfinished|
| 4. | Scanner | Unfinished|

### Home Page Content

1. Logo + Navigation Bar (locked on scroll) + Social. `NAV`

    Navigation Bar Contents
    - Home, Course, Scanner, and Login (membership page). 
2. Bio `SECTION`
3. Twitch Embedded `EMBEDDED WINDOW`,`SECTION`
4. Course Info `SECTION`
5. Scanner Info `SECTION`
6. Contact Info `SECTION`
7. Legal Info `FOOTER`

### Memebership + Payment Page

1. Logo + Navigation Bar (locked on scroll) + Social. `NAV`
    
    Navigation Bar Contents
    - Home, Course, and Scanner.
2. Membership package details `SECTION`
3. Testimonials `SECTION`
4. Login (embedded JS login input window) `EMBEDDED WINDOW`,`SECTION`
5. Legal Info `FOOTER`

### Course Page

1. Logo + Navigation Bar (locked on scroll) + Social. `NAV`

    Navigation Bar Contents
    - Home, Scanner, and Login (membership page).
2. Course description `SECTION`
3. Course sample images `IMAGES`
4. Course Testimonials `SECTION`
5. Teachable link `BUTTON`
6. Legal Info `FOOTER`

### Scanner Page

1. Logo + Navigation Bar (locked on scroll) + Social. `NAV`

    Navigation Bar Contents
    - Home, Course, and Login (membership page).
2. Scanner Description `SECTION`
3. Scanner `EMBEDDED WINDOW`,`SECTION`
4. Tips and Tricks or FAQ's `SECTION`
5. Legal Info `FOOTER`

## Mobile Design Elements

This website will utilize a responsive design over a seperate mobile site implementation. The use of 'media queries' will solve screen adjustment requirements for all desktop viewport sizes as well as tablets and mobile phones, etc. 

### Mobile "on/off" Switches

The use of display toggling will allow the site to have different text content. This will also be used to reduce loading time caused by certain javascript features that are not needed on a smaller device.

#### HTML Example
```html
<p class="desktop"> This is a full description meant for a larger display such as a desktop or a tablet.</p>
<p class="mobile">This is a smaller device display</p>
```
<br>
<br>

### CSS Example
```css
.desktop {
        display: block;
}
.mobile {
        display: none;
}
/* This will toggle dekstop view off and then mobile view on */
@media screen and (min-width:350px) and (max-width:500px){
    .desktop {
        display: none;
    }
    .mobile {
        display: block;
    }
}
```
<br>

## Commit Requirements

A commit push request must include a summary and short description.

### Summary

Must identify the folder or document being changed and one of the valid actions below.
If there are more than two files/folder then Multiple must be used to dientify and the description should include the locations of change
```
Summary
Multiple Correction, Addition, Removal

Description
index.html corrections - some correction description
style.css addition - added style.css
responsive.css removal - removed corrupted responsive.css file
```

#### Actions

An action identifies what you are doing to the document or folder.

List of actions:
1. Addition (Includes New Content)
2. Removal
3. Correction


#### Summary Example:
`ReadME.md Addition `, `Index.html Correction`, or `Style.css Removal`.
multiple actions = `ReadME.md Addition + Correction `

### Description

- Must Location(s) within the file or folder that the action has taken place.
- If multiple sections are edited in a row, rather than listing each section, indicating from "A to D" is acceptable.
- In order to limit description size, regular pushes are suggested to encourage document saves and the ability to check the work submitted. 

#### Description Example:
```
Added the background images, corrected minor spelling errors in tile.
```

## Built With

Technology used to create this project.

### Languages:

```
HTML5
CSS3
JavaScript
```

### Editors:

```
Visual Studio Code
```
[Download Visual Studio here.](https://code.visualstudio.com/ "Visual Studio Code 2018")

## Resources

1. [MDN Web Docs](https://developer.mozilla.org/en-US/ "Mozilla Developer Network")
2. [W3schools](https://www.w3schools.com/ "W3schools")
3. [Stackoverflow](https://stackoverflow.com/ "Stackoverflow")

## Authors

* **Nicholas Weinold** - *Initial work* - [SleeplessCoding](https://github.com/SleeplessCoding)

* **Daniel Nestor** - *Initial work* - [DNestor95](https://github.com/DNestor95)


## License

This project is not licensed currently but as projects grow the Apache 2.0 License will be applied.</br>
All work is protected under standard Intellectual Property Law Copyrights | All Rights Reserved. 

## Acknowledgments

* None, so far...