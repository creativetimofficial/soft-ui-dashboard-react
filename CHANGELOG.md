# Change Log

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
