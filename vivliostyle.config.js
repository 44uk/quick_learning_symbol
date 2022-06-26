module.exports = {
  title: 'Quick Learning Symbol', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  // author: 'XEMBook', // default to `author` in `package.json` or undefined.
  language: 'ja',
  size: 'JIS-B5',
  theme: '@vivliostyle/theme-techbook', // .css or local dir or npm package. default to undefined.
  entry: [
    '01_introduction.md',
    '02_setting.md',
    '03_account.md',
    '04_transaction.md',
    '05_mosaic.md',
    '06_namespace.md',
    '07_metadata.md',
    '08_lock.md',
    '09_multisig.md',
    '10_observer.md',
    '11_restriction.md',
    '12_offline_signature.md',
    '13_verify.md',
    // {
    //   path: 'epigraph.md',
    //   title: 'Epigraph', // title can be overwritten (entry > file),
    //   theme: '@vivliostyle/theme-whatever', // theme can be set individually. default to the root `theme`.
    // },
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
