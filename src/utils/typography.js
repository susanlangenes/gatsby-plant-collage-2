import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'

const typography = new Typography(sternGroveTheme)

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;