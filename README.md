# js-translate - for Angular, React, Vue and normal websites 

js-translate is a versatile translation library designed for use with Angular, React, Vue, and standard web development. It streamlines the implementation of translations in your application, providing an efficient and easy-to-integrate solution for projects across various frameworks and web environments

## Install

```
npm i @henryht/js-translate
```

## Usage

1.  import the pakage
    -   normal websites
    ```
    <script type="module">
        import * as hTranslate from 'dist-browser/hTranslate.js';
        window.hTranslate = hTranslate;
    <script/>
    ```
    -   modern websites (angular, react, vue or install with npm)
    ```
    import * as hTranslate from '@henryht/js-translate';
    window.hTranslate = hTranslate;
    ```

2.  Methods

    -   First, define the base language
    ```
    hTranslate.config({
        baseLang: "es"
    });
    ```

    -   The function 'loadFile' loads the required translation file. Optionally, you can pass the 'pageName' as an argument to load a translation file for a specific page.
    ```
    hTranslate.loadFile();
    ```

    -   The function `translate` has various parameters such as `querySelector`, which is a JavaScript `document.querySelector`. The other parameter is `impType`, which has a default value of `normal`, but if your website is not modern, change it to `element`.
    ```
    hTranslate.translate(text:string, impType:string, querySelector:string);
    ```
    

3.  Important points

    -   Translation files <br/>
    Translation files should be located within a folder named 'langs'

        ```
        -langs
            es.json
            en.json
            fr.json
        index.html
        ```
        The translation files for specific pages have the following format
        ```
        langs/es.pageName.json
        ```

        If you create translation files for specific pages, the automatic search for that file will be done by adding this meta tag to the page's header that will use such file
        ```
        <meta name="h-translate" content="pageName">
        ```

##  License

-   The js-translate is open-sourced library licensed under the [MIT license](https://opensource.org/licenses/MIT).