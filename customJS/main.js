/****************************************************************************************
 * CENTERING MODAL
 */
function setModalMaxHeight(element) {
    this.$element     = $(element);
    this.$content     = this.$element.find('.modal-content');
    var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
    var dialogMargin  = $(window).width() < 768 ? 20 : 60;
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
    var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
    var maxHeight     = contentHeight - (headerHeight + footerHeight);

    this.$content.css({
        'overflow': 'hidden'
    });

    this.$element
        .find('.modal-body').css({
        'max-height': maxHeight,
        'overflow-y': 'auto'
    });
}

$('.modal').on('show.bs.modal', function() {
    $(this).show();
    setModalMaxHeight(this);
});

$(window).resize(function() {
    if ($('.modal.in').length != 0) {
        setModalMaxHeight($('.modal.in'));
    }
});

$('#export').modal({ show: false})
/****************************************************************************************
 * END   CENTERING MODAL
 */

/****************************************************************************************
 *BUTTOn DELETED
 */
$(document).ready(function () {
    $(document).on('mouseenter', '.box-doc', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.box-doc', function () {
        $(this).find(":button.btn-circle-xs.btn-danger").hide();
    }).on('click', ':button.btn-circle-xs.btn-danger', function() {
        $(this).parent().remove();
    });
});
/****************************************************************************************
 *END BUTTOn DELETED
 */
/****************************************************************************************
 *TEXT EDITOR
 *******************************************************************************/

$('#bold').on('click', function() {
    document.execCommand('bold', false, null);
});

$('#italic').on('click', function() {
    document.execCommand('italic', false, null);
});

$('#underline').on('click', function() {
    document.execCommand('underline', false, null);
});

$('#align-left').on('click', function() {
    document.execCommand('justifyLeft', false, null);
});

$('#align-center').on('click', function() {
    document.execCommand('justifyCenter', false, null);
});

$('#align-right').on('click', function() {
    document.execCommand('justifyRight', false, null);
});

$('#list-ul').on('click', function() {
    document.execCommand('insertUnorderedList', false, null);
});

$('#list-ol').on('click', function() {
    document.execCommand('insertOrderedList', false, null);
});

$('#fonts').on('change', function() {
    var font = $(this).val();
    document.execCommand('fontName', false, font);
});

$('#size').on('change', function() {
    var size = $(this).val();
    $('.editor').css('fontSize', size + 'px');
});

$('.color-input').spectrum({
    color: 'transparent',
    showPalette: true,
    showInput: true,
    showInitial: true,
    showInput: true,
    preferredFormat: "hex",
    showButtons: false,
    change: function(color) {
        color = color.toHexString();
        document.execCommand('foreColor', false, color);
    }
});

/*-------------------------------- INIT perfectscrollbar TEXT EDITOR ---------------------*/
$('.editor').perfectScrollbar();

/*-------------------------------- UPLOAD LOGO & IMAGE BAcKGROUND ---------------------*/

$("[type=file]").on("change", function(){
    // Name of file and placeholder
    var file = this.files[0].name;
    var dflt = $(this).attr("placeholder");
    if($(this).val()!=""){
        $(this).next().text(file);
    } else {
        $(this).next().text(dflt);
    }
});




/*-------------------------------- EDIT DATA FOOTER ADRESS ---------------------*/


function myFunction() {
    document.getElementById("myP").contentEditable = true;
    document.getElementById("demo").innerHTML = "";
}