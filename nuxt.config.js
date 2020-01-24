
export default {
	mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
  	title: process.env.npm_package_name || '',
  	meta: [
  	{ charset: 'utf-8' },
  	{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
  	{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  	],
  	link: [
  	{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  	 { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Gelasio|Roboto&display=swap' }
  	]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    	module.exports = {
    		module: {
    			rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
            	test: /\.scss$/,
            	use: [
            	'vue-style-loader',
            	'css-loader',
            	'sass-loader'
            	]
            }
            ]
        },
        // plugin omitted
      }
    },
  },
   plugins: [{
    src: '~plugins/vue-scrollmagic.js',
    ssr: false
  }]
}
