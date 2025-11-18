# GUIDELINES FOR CSS

## @media & @container
- Any rule described in these [at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/At-rule) should try to follow the path of least resistance i.e. minimum styling.
    - For example:
        ```
            .container {
                display: grid;
                
                @media (max-width: 900px) {
                    display: block;
                }
            }
        ```
        The above code can be rewritten as:
        ```
            .container {
                @media (min-width: 900px) {
                    display: grid;
                }
            }
        ```
        In this case we avoid resetting to default behaviours by writing the breakpoint in a different manner, instead of resetting to default behaviour ourselves.

## index.css
- This file imports all other `.css` files and also stores the global variables and anything related to the global variables, such as [at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/At-rule).

## margin vs padding
- When trying to create space between elements don't use `margin` instead contain the main content of the component inside an element with semantic meaning or just `div` if nothing else works so that we can create the space by using `padding`.
- **This is because** margin is outside the `border-box` and will occupy additional space which we don't want it to occupy.
