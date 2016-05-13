/**
 * Audiz - Make your audio files shareable on your favorite social networks. Upload an
 *         audio file and an optional image and get back a video with audio
 *         visualization.
 *
 *            __             _______
 *           |▒▒|       __  |   _   |          _ _
 *  __       |▒▒|  __  |▒▒| |  |_|  |         | (_)
 * |▒▒|  __  |▒▒| |▒▒| |▒▒| |       |_   _  __| |_ ____
 * |▒▒| |▒▒| |▒▒| |▒▒| |▒▒| |   _   | | | |/ _` | |_  /
 * |▒▒| |▒▒| |▒▒| |▒▒| |▒▒| |  | |  | |_| | (_| | |/ /
 * |▒▒| |▒▒| |▒▒| |▒▒| |▒▒| |__| |__|\__,_|\__,_|_/___|  Socially Audio, ...
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

 ;(function (root, factory) {
   if (typeof define === 'function' && define.amd) {
     define(['jQuery'],
       function (jQuery) {
         return (root.Audiz = factory(jQuery))
       })
   } else if (typeof module === 'object' && module.exports) {
     module.exports = factory(require('jQuery'))
   } else {
     root.Audiz = factory(root.jQuery)
   }
 }(this, function ($) {
   var root = this || global
   var doc = root.document
   var me = {VERSION: '0.1.0'}
   var debug = false

   // -------------------------------------------------------------------------
   // Public methods

   /*
     Setup ..

   */

   me.init = function () {
   }

   /*
     Log a message to the console

       Parameters:
       - message (string): print out if in debug mode

   */

   function log (message) {
     if (debug) {
       console.log(message)
     }
   }

   if (typeof $ === 'undefined') {
     console.error('Please install the latest jQuery!')
   } else {
     $(function () {me.init()})
   }

   return me
 }))
