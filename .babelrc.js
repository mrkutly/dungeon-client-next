module.exports = {
  presets: [
		// '@babel/preset-env',
		"next/babel",
  ],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
}