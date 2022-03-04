# Change Log

## [3.1.0] 2022-03-04

### Bug fixing

- Momoized the context provider values
- Fix the conditionally used of useContext for SuiPagination component
- Fix the import/no-anonymouse-default-export

### Major style changes

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

### Updated dependencies

```
@emotion/cache                       11.4.0         →         11.7.1
@emotion/react                       11.4.1         →         11.8.1
@emotion/styled                      11.3.0         →         11.8.1
@mui/icons-material                  5.1.1          →         5.4.2
@mui/material                        5.1.1          →         5.4.3
@mui/styled-engine                   5.1.1          →         5.4.2
@testing-library/jest-dom            5.11.4         →         5.16.2
@testing-library/react               11.1.0         →         12.1.3
@testing-library/user-event          12.1.10        →         13.5.0
chroma-js                            2.1.2          →         2.4.2
prop-types                           15.7.2         →         15.8.1
react-countup                        5.2.0          →         6.1.1
react-router-dom                     5.2.0          →         6.2.1
react-scripts                        4.0.3          →         5.0.0
stylis                               4.0.10         →         4.0.13
stylis-plugin-rtl                    2.1.0          →         2.1.14
web-vitals                           1.0.1          →         2.1.4
```

### Warning

There is a warnings related to the stylis-plugin-rtl dependency that won't affect on the behavior of the product its something with the library itself.

## [3.0.0] 2021-11-23

### Bug fixing

### Major style changes

- Migration from JSS to MUI `styled` api, emotion and `sx` prop.
- The `box-shadow`, `border-radius` and `typography` `regular` size renamed to `md` for theme
- The `backgroundColor` prop renamed to `bgColor` for components
- The `boxShadow` prop renamed to `shadow` for components
- SuiBox `backgroundGradient` prop replaced with `variant: ["contained", "gradient"]`
- SuiButton `buttonColor` prop renamed to `color`
- SuiBadge `size` prop updated to ["xs", "sm", "md", "lg"]
- SuiInput `withIcon` prop renamed to `icon`
- SuiProgress `gradient` prop replaced with `variant: ["contained", "gradient"]`
- SuiTypography `textColor` prop renamed to `color`
- Sidenav is more dynamic now, color, brand, brandName props are added

### Deleted components

### Added components

### Deleted dependencies

```
- jss
- jss-rtl
- @mui/styles
```

### Added dependencies

### Updated dependencies

```
@mui/icons-material                5.0.0     →     5.1.1
@mui/material                      5.0.0     →     5.1.1
@mui/styled-engine                 5.0.0     →     5.1.1
```

### Warning

## [2.0.0] 2021-09-21

### Bug fixing

### Major style changes

- Migration from Material-UI v4 to Material-UI v5.
- Customizing Autocomplete component based on the Soft Design.
- Customizing the TextField component based on the Soft Design.

### Deleted components

### Added components

### Deleted dependencies

```
- @material-ui/core
- @material-ui/icons
- @material-ui/styles
```

### Added dependencies

```
- @emotion/cache
- @emotion/react
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material
- @mui/styled-engine
- @mui/styles
- stylis
- stylis-plugin-rtl
```

### Updated dependencies

### Warning

- The soft-ui-dashboard-react/pages/rtl is chaning the route slowly in development mode its a problem with @emotion/cache `prepend` and we will fix it on our future updates.
- There is some console error related to the key on table component and it will not make any issue for you we will take care of that on our next update for the product.

## [1.0.0] 2021-09-08

### Original Release
