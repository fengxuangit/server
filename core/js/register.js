/**
 * Copyright (c) 2015
 *  Vincent Petry <pvince81@owncloud.com>
 *  Jan-Christoph Borchardt, http://jancborchardt.net
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING-README file.
 */

/**
 * @namespace
 * @memberOf OC
 */
OC.Register = _.extend(OC.Register || {}, {
    onRegister: function () {
        $('#submit')
            .removeClass('icon-confirm-white')
            .addClass('icon-loading-small')
            .attr('value', t('core', 'Registering …'));
        return true;
    },

    rememberLogin: function(){
        if($(this).is(":checked")){
            if($("#user").val() && $("#password").val()) {
                $('#submit').trigger('click');
            }
        }
    }
});

$(document).ready(function() {
    $('form[name=Register]').submit(OC.Register.onRegister);

    $('#remember_login').click(OC.Register.rememberLogin);
});
