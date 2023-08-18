import webfont from 'webfont'

// @font-face {
//   font-family: "iconfont"; /* Project id 3294545 */
//   src: url('//at.alicdn.com/t/font_3294545_0fmfjnerj1x4.woff2?t=1648743133021') format('woff2'),
//        url('//at.alicdn.com/t/font_3294545_0fmfjnerj1x4.woff?t=1648743133021') format('woff'),
//        url('//at.alicdn.com/t/font_3294545_0fmfjnerj1x4.ttf?t=1648743133021') format('truetype');
// }

// .iconfont {
//   font-family: "iconfont" !important;
//   font-size: 16px;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// .icon-xiangsu_aixin:before {
//   content: "\ed19";
// }
export function process(files: string | string[]) {
  return webfont({
    files,
    fontName: 'iconfont',
    formats: ['ttf', 'woff', 'woff2']
  })
}
