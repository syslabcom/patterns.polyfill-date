/**
 * Patterns polyfill-color - Polyfill for input type=date
 *
 */
define([
    "pat-registry",
    "modernizr",
    "pikaday.jquery",
    "moment",
    "moment-timezone"
], function(registry, modernizr, pikaday, moment, momenttimezone) {
    var _ = {
        name: "polyfill-date",
        trigger: ".pat-date-picker",
        init: function($el) {
            if (!Modernizr.inputtypes.date) {
                $el.pikaday();
            }
            return $el;
        },

        destroy: function() {
            // XXX
        }
    };

    registry.register(_);
    return _;
});

// jshint indent: 4, browser: true, jquery: true, quotmark: double
// vim: sw=4 expandtab
